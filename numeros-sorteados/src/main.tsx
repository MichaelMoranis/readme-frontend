import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Quina } from './components/Quina/Quina.tsx'
import { LayoutRouter } from './components/Layout/LayoutRouter.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutRouter />, // Usando o Layout como elemento principal
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'quina',
        element: <Quina />,
      },
      // {
      //   path: 'works',
      //   element: <Works />,
      // },
      // {
      //   path: 'images',
      //   element: <Images />,
      // },
      // {
      //   path: 'setup',
      //   element: <Setup />,
      // },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
