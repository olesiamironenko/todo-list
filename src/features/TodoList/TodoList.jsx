import React from 'react';
import TodoListItem from './TodoListItem.jsx';

function TodoList({ todoList, onCompleteTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
