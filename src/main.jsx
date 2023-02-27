import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { startFirebase } from './Firebase/Config'
import './index.css'
startFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
