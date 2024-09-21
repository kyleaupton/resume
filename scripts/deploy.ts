import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { renderToFile } from '@react-pdf/renderer';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3'
import 'dotenv/config'

const BUCKET = 'upton-public-assets';
const PREFIX = 'resumes';

// Env validation
const requiredEnv = ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY']
for (const item of requiredEnv) {
  if (!process.env[item]) {
    throw Error(`Missing env item ${item}`)
  }
}

// Create S3 client
const client = new S3Client({
  region: 'us-east-1',
})

//
// Helpers
//
const key = (pdfName: string) => {
  return `${PREFIX}/${pdfName}`;
}

//
// Main
//
const __project = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const __pdfs = path.join(__project, 'src', 'variants');
const __dist = path.join(__project, 'dist');

// Ensure dist directory exists
await fs.mkdir(__dist, { recursive: true });

// Get list of PDFs to render
const pdfs = await fs.readdir(__pdfs);

for (const pdf of pdfs) {
  const name = `${pdf}.pdf`
  console.log('Processing', name);

  const __out = path.join(__project, 'dist', name);
  const PDF = (await import(path.join(__pdfs, pdf))).default;
  await renderToFile(PDF(), __out);

  console.log('Rendered', __out);
  console.log('Uploading', name);

  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key(name),
      ContentDisposition: 'inline',
      ContentType: 'application/pdf',
      Body: createReadStream(__out)
    })
  );

  console.log('Done', name);
  console.log('-'.repeat(80));
}
