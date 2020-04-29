import React from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-2 text-center" id="book-logo">
              <i className="fas fa-book-reader"></i> &nbsp;BOOK SEARCH
            </h1>
            <h2 className="text-center">
              Search and Save from the Google Books API
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
