import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Filme from './Filme.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/filme/:id',
    element: <Filme />
  }
])

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);