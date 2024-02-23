import { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./App.css";

function App() {
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    let updatedTodoList = [newTodoItem, ...allTodos];
    setTodos(updatedTodoList);
    localStorage.setItem("savedTodoList", JSON.stringify(updatedTodoList));
    setNewTitle("");
    setNewDescription("");
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    setTodos(reducedTodo);

    localStorage.setItem("savedTodoList", JSON.stringify(reducedTodo));
  };

  const handleCompletedTodos = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + "-" + mm + "-" + yy + " At " + h + ":" + m + ":" + s;
    let filteredItem = {
      ...allTodos[index],
      completedOn,
    };
    let updatedCompletedArr = [filteredItem, ...completedTodos];
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  useEffect(() => {
    let savedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));
    let savedCompletedTodoList = JSON.parse(
      localStorage.getItem("completedTodos")
    );
    if (savedTodoList) {
      setTodos(savedTodoList);
    }
    if (savedCompletedTodoList) setCompletedTodos(savedCompletedTodoList);
  }, []);

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
          {isCompletedScreen === false &&
            allTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      title="Delete?"
                      onClick={() => handleDeleteTodo(index)}
                    />
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => handleCompletedTodos(index)}
                      title="completed?"
                    />
                  </div>
                </div>
              );
            })}

          {isCompletedScreen === true &&
            completedTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                      <small>Completed ON: {item.completedOn}</small>
                    </p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      className="icon"
                      title="Delete?"
                      onClick={() => handleDeleteTodo(index)}
                    />
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
