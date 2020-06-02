import React from "react";
import logo from "./logo.svg";
import "./App.css";

const todos = ["Go to market", "Buy food", "Make dinner"];

function App() {
  return (
    <div className="App">
      <ul className="todoList">
        {todos.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
