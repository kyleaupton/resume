// @ts-ignore
import React from 'react';
import { createRoot } from 'react-dom/client';
import { usePDF } from '@react-pdf/renderer';
import PDF from './pdf';
import './main.css';

function App() {
  const [instance] = usePDF({ document: PDF });

  if (instance.loading) return <div>Loading...</div>;
  if (instance.error || !instance.url) {
    return (
      <div>
        Something went wrong:
        {instance.error}
      </div>
    );
  }

  return (
    <div className="pdf-wrapper">
      <iframe title="PDF" src={instance.url} />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <App />,
);
