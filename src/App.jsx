import React from 'react'
import SideBar from './components/sidebar/SideBar'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/landingpage/Home'


const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <SideBar />,
      children: [
        {
          path: "",
          element: <Home />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App