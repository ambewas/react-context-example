import React from "react";
import ReactDOM from "react-dom";
import ContextProvider from "./provider";
import DeepDom from "./deepDom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <DeepDom />
      </ContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
