import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoListItem({ todo, onCompleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <form>
        {isEditing ? (
          <TextInputWithLabel value={todo.title} />
        ) : (
          <>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              id={`checkbox${todo.id}`}
              onChange={() => onCompleteTodo(todo.id)}
            />
            <span onClick={() => setIsEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
