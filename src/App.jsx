import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  // Set statement
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    const newTodo = { title, id: Date.now() };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} />
      ) : (
        <p>Add todo above to get started</p>
      )}
    </div>
  );
}

export default App;
