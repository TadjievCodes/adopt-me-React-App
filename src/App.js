import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import "./style.css";

// your code goes here for now

// React.createElement gets three parameters: first> type of element it is, second> object, third> the children it's creating

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
