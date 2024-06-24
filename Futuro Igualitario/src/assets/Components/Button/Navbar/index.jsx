import React from "react";


function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        {" "}
        Herdoy
      </a>
      <ul className="nav__Menu">
        <li className="nav__Item">
          {" "}
          <a href="#" className="nav__Link">
            home
          </a>
        </li>
        <li className="nav__Item">
          {" "}
          <a href="#" className="nav__Link">
            Abount
          </a>
        </li>
        <li className="nav__Item">
          {" "}
          <a href="#" className="nav__Link">
            Skills
          </a>
        </li>
        <li className="nav__Item">
          {" "}
          <a href="#" className="nav__Link">
            Portafolio
          </a>
        </li>
        <li className="nav__Item">
          {" "}
          <a href="#" className="nav__Link">
            Contact
          </a>
        </li>
        <li className="nav__Item">
          {" "}
          <a href="#" className="nav__Link">
            home
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
