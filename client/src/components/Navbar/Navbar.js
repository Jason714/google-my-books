import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation" aria-label="main navigation">
      <Link to="/" className="navbar-item">
        <h1 className="navbar-brand" id="book-logo">
          <i className="fas fa-book-reader"></i> &nbsp;&nbsp;BOOK SEARCH
            </h1>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="navbar-item">
              <div className="nav-link">
                Search
                </div>
            </Link>
          </li>
          <li>
            <Link to="/saved" className="navbar-item">
              <div className="nav-link">
                Saved
                </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
