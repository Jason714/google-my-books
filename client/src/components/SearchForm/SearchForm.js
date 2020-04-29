import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <>
      <hr />
      <div className="input-group">
        <input
          className="input"
          id="input"
          type="text"
          placeholder="Book Title, Author, or Keyword"
          aria-label="Book Title, Author, or Keyword"
          onChange={props.handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn"
            id="search-btn"
            onClick={props.handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
