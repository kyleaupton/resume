// @ts-ignore
import React from 'react';
import { createRoot } from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';
import Fancy1 from './variants/fancy-1/pdf';
import './main.css';

function DocumentWrapper() {
  return (
    <PDFViewer>
      <Fancy1 />
    </PDFViewer>
  );
}

const MOUNT_ELEMENT = document.createElement('div');
MOUNT_ELEMENT.classList.add('root');

document.body.appendChild(MOUNT_ELEMENT);

const root = createRoot(MOUNT_ELEMENT);

root.render(<DocumentWrapper />);
