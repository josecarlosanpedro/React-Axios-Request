import React from "react";
import ReactDOM from "react-dom";
import Home from "./Modules/Home/index.jsx";
import "antd/dist/antd.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
