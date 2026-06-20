function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;