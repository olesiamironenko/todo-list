import React from 'react';

function TodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">Todo</label>
      <input id="todoTitle" val="" />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
