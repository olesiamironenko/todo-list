import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  // Set statement
  const [todoList, setTodoList] = useState([]);
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  function addTodo(title) {
    const newTodo = {
      title,
      id: Date.now(),
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
  }

  function completeTodo(id) {
    const completedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      }
      return todo;
    });
    setTodoList(completedTodos);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      {todoList.length > 0 ? (
        <TodoList todoList={filteredTodoList} onCompleteTodo={completeTodo} />
      ) : (
        <p>Add todo above to get started</p>
      )}
    </div>
  );
}

export default App;
