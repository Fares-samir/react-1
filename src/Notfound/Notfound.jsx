import React from 'react'
import error from '../assets/404.avif'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'





export default function Notfound() {
  return (
    <div>

       <div className="errorr d-flex col-  justify-content-center align-items-center rounded-5">
        
        <img src={error} className='w-10' alt="" />
        <Link to='/Home' className='text-black'>go home</Link>

       </div>





    </div>
  )
}
