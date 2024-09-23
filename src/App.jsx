import "./App.css";
import questions from "../public/data.js";
import { useState } from "react";

function App() {
  const [selectId, setSelectId] = useState(null);
  const handleClick = (id) => {
    setSelectId(id !== selectId ? id : null);
  };
  return (
    <>
      <h1>my Question Bank</h1>

      <div className="cards">
        {questions.map((qus) => {
          return (
            <div
              onClick={() => handleClick(qus.id)}
              className={`card ${qus.id === selectId ? "card-selected" : ""}`}
              key={qus.id}
            >
              <h4>{qus.id === selectId ? qus.answer : qus.question}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
