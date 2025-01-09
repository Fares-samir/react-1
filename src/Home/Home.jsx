import React from 'react';
import img from '../assets/avataaars.svg';

export default function Home() {
  return (
    <>
      <div className="container-fluid p-0 vh-100">
        <div className="item bg-back w-100 h-100 d-flex justify-content-center align-items-center text-center text-white">
          <div>
            <div className="div">
              <img src={img} alt="" />
            </div>
            <h2 className="bor">Start Framework</h2>
            <i className="fa-solid fa-star" style={{ color: 'white' }}></i>
          </div>
        </div>
      </div>
    </>
  );
}
