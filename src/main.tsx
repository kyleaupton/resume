import React from 'react'
import { createRoot } from 'react-dom/client'
import { Document, Page, pdfjs } from 'react-pdf'
import { usePDF } from '@react-pdf/renderer'
import PDF from './pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import './main.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.js',
  import.meta.url
).toString()

const App = () => {
  const [instance] = usePDF({ document: PDF })

  if (instance.loading) return <div>Loading...</div>
  if (instance.error) return <div>Something went wrong: {instance.error}</div>

  return (
    <div className='pdf-wrapper'>
      <Document key={instance.url} file={instance.url}>
        <Page pageNumber={1} scale={1.3} />
      </Document>
    </div>
  )
}

createRoot(document.getElementById('root')!).render( // eslint-disable-line
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
