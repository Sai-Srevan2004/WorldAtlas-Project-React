import React from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Country from './Pages/Country'
import AppLayout from './AppLayout'
import CountryDetails from './Pages/CountryDetails'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([{path:'/',element:<AppLayout/>,children:[
    {path:'/',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/country',element:<Country/>},
    {path:'/contact',element:<Contact/>},
    {path:'/country/:id',element:<CountryDetails/>}
]}])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
