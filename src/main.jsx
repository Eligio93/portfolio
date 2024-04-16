import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/projects',
    element:<Projects />
  },
  {
    path:'/contacts',
    element: <Contacts />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
