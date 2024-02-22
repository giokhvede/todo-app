import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Type the Task" />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input type="text" placeholder="Type the Description" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button>Todos</button>
          <button>Completed</button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>Task 1 Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
