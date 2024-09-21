// @ts-ignore
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';
import Fancy1 from './variants/fancy-1';
import Plain1 from './variants/plain-1';
import Plain2 from './variants/plain-2';
import './main.css';

function DocumentWrapper() {
  const { pathname } = window.location;
  let PdfComponent;
  switch (pathname) {
    case '/fancy-1':
      PdfComponent = Fancy1;
      break;
    case '/plain-1':
      PdfComponent = Plain1;
      break;
    case '/plain-2':
      PdfComponent = Plain2;
      break;
    default:
      PdfComponent = Plain1;
      break;
  }

  return (
    <PDFViewer>
      <PdfComponent />
    </PDFViewer>
  );
}

const MOUNT_ELEMENT = document.createElement('div');
MOUNT_ELEMENT.classList.add('root');

document.body.appendChild(MOUNT_ELEMENT);

const root = createRoot(MOUNT_ELEMENT);

root.render(<DocumentWrapper />);

// This is a hack to make the PDF update on "HMR"
// Full page reload is not ideal, but it's quick so who cares
if (import.meta.hot) {
  import.meta.hot.on('vite:afterUpdate', () => window.location.reload());
}
