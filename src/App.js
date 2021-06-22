import React from "react";
import { render } from "react-dom";
import Pet from "./Pet"
// your code goes here for now

// React.createElement gets three parameters: first> type of element it is, second> object, third> the children it's creating

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cokatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "mixed",
    }),
  ]);
};

render(
  //<App />,
  React.createElement(App),
  document.getElementById("root")
);
