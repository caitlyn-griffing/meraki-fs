import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className='section'>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <span className='fs'>CAITLYN</span> GRIFFING
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                exact
                to="/"
                href='#'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/about"
                href='#about'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/project"
                href='#project'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                exact
                to="/contact"
                href='#contact'
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar

