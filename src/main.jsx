import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-center" richColors closeButton />
    </BrowserRouter>
  </React.StrictMode>,
)// Force Vercel rebuild - Fri Jul 24 20:16:56 UTC 2026
