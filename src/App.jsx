import React from 'react'
import Home from './Home/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './About/About'
import Parent from './Parent/Parent'
import Layout from './Layout/Layout'
import './App.css'
import Reg from './Reg/Reg'
import Notfound from './Notfound/Notfound'





export default function App() {
 let x= createBrowserRouter([{
  path:'',element:<Layout/>,children:[{
   index:true,element:<Home/>
  },
  {
    path:'Home',element:<Home/>
  },
  {
    path:'About',element:<About/>
  },
  {
    path:'Parent',element:<Parent/>
  },
  {
    path:'Reg',element:<Reg/>
  },
  {
    path:'*',element:<Notfound/>
  },
  ]
 }
  
])
 return (
    <div>
      <RouterProvider router={x}/>
      
    </div>
  )
}

