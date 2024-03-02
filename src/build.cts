import fs from 'fs/promises';
import path from 'path';
// import url from 'url';
import { renderToFile } from '@react-pdf/renderer';
import PDF from './pdf';

const doRender = async () => {
  // const dist = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..', 'dist');
  const dist = path.resolve(__dirname, '..', 'dist');
  await fs.mkdir(dist, { recursive: true });
  await renderToFile(PDF, path.join(dist, 'out.pdf'));
};

doRender()
  .then(() => { console.log('Built PDF'); })
  .catch((error) => { console.error(error); process.exit(1); });
