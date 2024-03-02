import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { usePDF } from '@react-pdf/renderer'
import { Octokit } from 'octokit'
import PDF from './pdf'
import { projects } from './projects'
import './main.css'

const octokit = new Octokit();

let cache: any[] | null = null

const App = () => {
  const [data, setData] = useState(projects)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProjectData = async () => {
      if (cache) {
        setData(cache)
        setLoading(false)
        return
      }

      const payload = []

      try {
        for (const project of projects) {
          console.log('making api request')
          payload.push((await octokit.request(`GET /repos/${project.id}`)).data);
        }
        setData(payload)
        cache = payload
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getProjectData()
  }, [])

  const [instance] = usePDF({ document: PDF })

  if (instance.loading || loading) return <div>Loading...</div>
  if (instance.error || !instance.url || error) return <div>Something went wrong: {instance.error}</div>

  return (
    <div className='pdf-wrapper'>
      <iframe src={instance.url} />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <App />
)
