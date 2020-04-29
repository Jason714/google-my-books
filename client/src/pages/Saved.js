import React, { useState, useEffect } from "react";
import SavedAPI from "../utils/SavedAPI";

import Section from "../components/Section/Section";
import Result from "../components/Result/Result";


function Saved() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    loadSaved();
  }, [])

  function loadSaved() {
    SavedAPI.getBooks()
      .then(res => setSaved(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id, title) => {
    SavedAPI.deleteBook(id)
      .then(res => loadSaved())
      .catch(err => console.log(err));
  };

  return (
    <Section sectionTitle="Saved Books">
      {saved.length === 0 ? (
        <>
          <hr />
          <p>No books saved yet!</p>
        </>
      ) : (
          <></>
        )}
      {saved.map((book) => (
        <Result
          key={book._id}
          id={book._id}
          title={book.title}
          authors={book.authors}
          description={book.description}
          link={book.link}
          image={book.image}
          handleDelete={handleDelete}
        />
      ))}
    </Section>
  );
}

export default Saved;
