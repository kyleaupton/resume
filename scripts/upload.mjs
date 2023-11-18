import fs from 'fs'
import path from 'path'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import 'dotenv/config'

const BUCKET = 'upton-public-assets'
const TARGET = path.resolve('dist', 'out.pdf')

//
// Env validation
//
const requiredEnv = ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY']
for (const item of requiredEnv) {
  if (!process.env[item]) {
    throw Error(`Missing env item ${item}`)
  }
}

//
// Target validation
//
if (!fs.existsSync(TARGET)) {
  throw Error('Target PDF doesn not exist')
}

//
// Client setup
//
const client = new S3Client({
  region: 'us-east-1',
})

await client.send(
  new PutObjectCommand({
    Bucket: BUCKET,
    Key: 'Kyle_Upton_Resume.pdf',
    Body: fs.createReadStream(TARGET)
  })
)
