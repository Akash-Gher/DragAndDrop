/* I'll add support of touch screens and make the best tutorial ever */
/* Me on twitter @guandjoy */
import React from "react";
import ReactDOM from "react-dom";
import Notes from "./Notes";
import "./styles.css";

function App() {
  return <Notes />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
