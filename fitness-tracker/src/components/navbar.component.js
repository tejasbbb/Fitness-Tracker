import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [gradientAngle, setGradientAngle] = useState(45);

  const handleMouseMove = (e) => {
    const navbarRect = e.currentTarget.getBoundingClientRect();
    const mouseXPercentage =
      ((e.clientX - navbarRect.left) / navbarRect.width) * 100;
    setGradientAngle(360 * (mouseXPercentage / 100));
  };

  return (
    <nav
      className="navbar navbar-dark navbar-custom navbar-expand-lg"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `linear-gradient(${gradientAngle}deg, #6a11cb 0%, #2575fc 100%)`,
      }}
    >
      <Link to="/" className="navbar-brand">
        FiTrack
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
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
