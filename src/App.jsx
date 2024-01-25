import { useState } from "react";
import "./App.css";
import questions from "./data";
import Questions from "./Questions";

function App() {
  const [show, setShow] = useState(false);
  const [no, setNo] = useState(null);

  function handleShow(id) {
    setNo((prev) => (prev === id ? null : id));
    setShow(!show);
  }

  return (
    <div className="wrapper">
      <div className="box">
        <h1>Questions</h1>
        {questions.map((item) => (
          <Questions
            key={item.id}
            title={item.title}
            info={item.info}
            id={item.id}
            handleShow={handleShow}
            show={show}
            no={no}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
