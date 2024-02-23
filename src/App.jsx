import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./App.css";

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    setTodos([newTodoItem, ...allTodos]);
    setNewTitle("");
    setNewDescription("");
  };

  return (
    <div className="app">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              placeholder="Type the Task"
            />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              type="text"
              placeholder="Type the Description"
            />
          </div>
          <div className="todo-input-item">
            <button
              onClick={handleAddTodo}
              type="button"
              className="primaryBtn"
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn ${
              isCompletedScreen === false && "active"
            }`}
            onClick={() => setIsCompletedScreen(false)}
          >
            Todos
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && "active"}`}
            onClick={() => setIsCompletedScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div>
                  <AiOutlineDelete className="icon" title="Delete?" />
                  <BsCheckLg className="check-icon" title="completed?" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
