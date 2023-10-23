import React from 'react'
import ReactDOM from 'react-dom/client'
import { PDFViewer } from '@react-pdf/renderer'
import { PDF } from './pdf'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="pdf-wrapper">
      <PDFViewer>
        <PDF />
      </PDFViewer>
    </div>
  </React.StrictMode>,
)
