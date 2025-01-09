import React from 'react'

export default function Reg() {
  return (
    
    <>
    <div className="container">
    <h2 className='d-flex justify-content-center dor'>
        <h2>    conatct section
        </h2>
        <i className="fa-solid fa-star position-relative starr " style={{ color: 'black' }}></i>

    </h2>

    <form action="">
       <div className="div mb-5">
        <input type="text" placeholder='username' className='form-control border-0 border-bottom border-black rounded-0' />
       </div>
       <div className="div mb-5">
        <input type="text" placeholder='user age' className='form-control border-0 border-bottom border-black rounded-0' />
       </div>
       <div className="div mb-5">
        <input type="email" placeholder='user email' className='form-control border-0 border-bottom border-black rounded-0' />
       </div>
       <div className="div mb-3">
        <input type="password" placeholder='Password' className='form-control border-0 border-bottom border-black rounded-0' />
       </div>
       <button className='btn btn-success mb-5 '> send Massege</button>
    </form>
    </div>
    </>
  )
}
