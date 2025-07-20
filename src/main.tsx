import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouteProvider } from './routes.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteProvider />
  </StrictMode>,
)
