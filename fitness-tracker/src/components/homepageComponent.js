import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-8">
              <h1 className="display-3 text-white">Track Your Fitness</h1>
              <p className="lead text-white">
                A revolutionary way to monitor your daily progress in the gym.
              </p>
              <div className="buttons">
                <Link to="/signup" className="btn btn-lg oura-button">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="logo-container">
              <div className="logo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
