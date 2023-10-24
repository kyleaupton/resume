import React from 'react'
import ReactDOM from 'react-dom/client'
import { PDFViewer } from '@react-pdf/renderer'
import { PDF } from './pdf'
import './main.css'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div className="pdf-wrapper">
        <PDFViewer>
          <PDF />
        </PDFViewer>
      </div>
    </React.StrictMode>
  )
}
