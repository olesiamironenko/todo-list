import React, { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef('');

  function handleAddTodo(event) {
    event.preventDefault();
    const title = event.target.title.value;
    onAddTodo(title);
    todoTitleInput.current.value = '';
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input name="title" id="todoTitle" val="" ref={todoTitleInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
