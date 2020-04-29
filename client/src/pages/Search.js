import React, { useState, useEffect } from "react";
import API from "../utils/API";

import Section from "../components/Section/Section";
import SearchForm from "../components/SearchForm/SearchForm";
import Result from "../components/Result/Result";

import SavedAPI from "../utils/SavedAPI";


function Search() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search.trim()) {
      return;
    }
    API.searchBook(search)
      .then((res) => {
        if (res.data.totalItems === 0) {
          setResults([]);
          throw new Error("No results found.");
        }
        setResults(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    setSearch(inputValue);
  };

  const handleSave = (bookData) => {
    SavedAPI.saveBook(bookData)
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Section
        sectionTitle="Search Books">
        <SearchForm
          handleInputChange={handleInputChange}
          handleClick={handleClick}
        />
      </Section>
      {results.length === 0 ? (
        <></>
      ) : (
          <Section sectionTitle="Results">
            {results.map((result) => (
              <Result
                key={result.id}
                title={result.volumeInfo.title}
                authors={result.volumeInfo.authors}
                description={result.volumeInfo.description}
                link={result.volumeInfo.infoLink}
                image={
                  result.volumeInfo.imageLinks === undefined
                    ? "https://via.placeholder.com/64x64.png?text=No+Image+Found"
                    : result.volumeInfo.imageLinks.thumbnail
                }
                handleSave={handleSave}
              />
            ))}
          </Section>
        )}
    </>
  );
}

export default Search;
