import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
export default class header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{position:'fixed'}}>
  <div className="container-fluid" style={{position:'fixed', overflow: 'hidden'}}>
    <div className="navbar-brand logo" to="Home"><img src='https://t3.ftcdn.net/jpg/00/85/73/28/360_F_85732813_H42V97IazS9xQNfMPYrbk1fgQcg9l8rs.jpg' alt='Logo' width={'100px'} height={'80px'}/></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav"  >
        <li className="nav-item">
          <Link style={{transition: 'transform 0.3s ease-out'}} className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{transition: 'transform 0.3s ease-out'}} className="nav-link" to="About">About</Link>
        </li>
        <li className="nav-item">
          <Link style={{transition: 'transform 0.3s ease-out'}} className="nav-link" to="Contact">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

