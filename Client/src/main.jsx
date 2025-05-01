import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/bootstrap.min.css'
import '../src/styles/all.min.css'
import '../src/styles/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)