import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-col text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home">Start Framework
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="About">ABout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Parent">Portofilo</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="Reg">Contact</Link>

            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
