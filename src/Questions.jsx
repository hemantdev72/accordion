import React from "react";
import "./App.css";

function Questions({ title, info, id, handleShow, show, no }) {
  return (
    <div className="question" onClick={() => handleShow(id)}>
      <div className="quest-div">
        <h1>{title}</h1>
        <p className="btn">{show && no === id ? "-" : "+"}</p>
      </div>
      {show && no === id ? <p className="desc">{info}</p> : ""}
    </div>
  );
}

export default Questions;
