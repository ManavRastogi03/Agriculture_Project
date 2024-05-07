import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      {/* <Route path='/about' element={}/> */}

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
