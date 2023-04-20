import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navbar-transparent">
      <Link to="/" className="navbar-brand">
        FiTrack
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/exercise" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Data" className="nav-link">
              Data
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
