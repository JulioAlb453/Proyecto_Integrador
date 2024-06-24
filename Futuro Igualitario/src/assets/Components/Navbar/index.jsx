import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

function Navbar() {
  return (
      <nav className="nav">
        <Link id="link"  className="nav__brand">
          Herdoy
        </Link>
        <ul className="nav__Menu">
          <li className="nav__Item">
            <Link id="link" to="/login" className="nav__Link">
              Login
            </Link>
          </li>
          <li className="nav__Item">
            <Link id="link" className="nav__Link">
              About
            </Link>
          </li>
          <li className="nav__Item">
            <Link id="link" className="nav__Link">
              Skills
            </Link>
          </li>
          <li className="nav__Item">
            <Link id="link" className="nav__Link">
              Portfolio
            </Link>
          </li>
          <li className="nav__Item">
            <Link id="link" className="nav__Link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
