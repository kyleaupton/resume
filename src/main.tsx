import React from 'react'
import { createRoot } from 'react-dom/client'
import { usePDF } from '@react-pdf/renderer'
import PDF from './pdf'
import './main.css'

const App = () => {
  const [instance] = usePDF({ document: PDF })

  if (instance.loading) return <div>Loading...</div>
  if (instance.error || !instance.url) return <div>Something went wrong: {instance.error}</div>

  return (
    <div className='pdf-wrapper'>
      <iframe src={instance.url} />
    </div>
  )
}

createRoot(document.getElementById('root')!).render( // eslint-disable-line
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
