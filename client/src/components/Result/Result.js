import React from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

function Result(props) {
  const location = useLocation();

  const bookData = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  };

  return (
    <>
      <hr />
      <article className="card mb-3">
        <div className="row no-gutters">
          <figure className="col-md-2">
            <p className="image is-64x64">
              <img src={props.image} alt={props.title} />
            </p>
          </figure>
          <div className="col-md-9">
            <div className="content">
              <p>
                <strong>{props.title}</strong>
                <br />
                {props.authors !== undefined && props.authors.length !== 0 ? (
                  <>
                    <span>Written by: </span>
                    {props.authors.map((author) => (
                      <span key={author}>
                        <br />
                        {author}
                      </span>
                    ))}
                    <br />
                  </>
                ) : (
                  <></>
                )}
                <br />
                {props.description}
              </p>
            </div>
          </div>
          <div className="col-md-1">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-lg btn-outline-dark">
                <i className="fas fa-eye"></i>
              </button>
            </a>
            <br />
            {location.pathname === "/" ? (
              <button
                className="btn btn-lg btn-outline-dark"
                data-title={props.title}
                onClick={() => props.handleSave(bookData)}
              >
                <i className="fas fa-heart"></i>
              </button>
            ) : (
              <button
                className="btn btn-lg btn-outline-dark"
                onClick={() => props.handleDelete(props.id, props.title)}
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

export default Result;
