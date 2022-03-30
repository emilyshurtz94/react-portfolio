import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Emily Shurtz</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/project">Projects</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://docs.google.com/document/d/1o3DhC2jWhTuGUqP-bMPu8s4dLRn-gp9Six1hHGhMZUw/edit?usp=sharing">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}
