import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("Todos Updated:", todos);
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Simple Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p className="empty">No tasks available.</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => deleteTodo(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;