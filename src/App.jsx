import React from 'react'
import "./app.css"
import Watch from "./pages/watch/watch"
import Home from "./pages/home/home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./pages/register/register"
import Login from "./pages/login/login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: "/watch",
    element: <Watch />
  }, {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }
])


export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
