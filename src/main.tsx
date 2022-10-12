import React from 'react'
import ReactDOM from 'react-dom/client'

import {Router} from './router'

import {AuthProvider} from "./hooks/auth"

import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Router/>
    </AuthProvider>
  </React.StrictMode>
)
