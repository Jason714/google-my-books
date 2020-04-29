import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section>
      <div className="container">
        <div>
          <h4>{props.sectionTitle}</h4>
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default Section;
