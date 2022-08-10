import React, { useState } from "react";
import Header from "./Header";

function App() {
  const anchors = [
    "landing",
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
    "sixthPage",
  ];
  const [page, setPage] = useState("landing");
  return (
    <div className="App">
      <Header page={page} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
