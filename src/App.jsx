import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Register from "./pages/register/register"
import Watch from "./pages/watch/watch"
import Login from "./pages/login/login"
import Home from "./pages/home/home"
import React from 'react'
import "./app.css"

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
