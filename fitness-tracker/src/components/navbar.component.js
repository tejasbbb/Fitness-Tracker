import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./menu.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-custom navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        FiTrack
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/exercise" className="nav-link menu-item">
              Exercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link menu-item">
              Create Exercise Log
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Data" className="nav-link menu-item">
              Data
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
