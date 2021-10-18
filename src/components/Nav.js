import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/"><img src={logo} alt="logo" width="50" height="50" className="d-inline-block align-top"/></Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/teams">Teams</Link>
          </li>
          <li className="nav-item">
            <Link to="/players">Players</Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming">Games</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav