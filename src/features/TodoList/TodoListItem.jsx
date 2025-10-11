import { useState, useEffect } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
import styles from './TodoListItem.module.css';
import StyledButton from '../../shared/Button.jsx';

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  // Sync workingTitle with todo.title whenever todo changes
  useEffect(() => {
    setWorkingTitle(todo.title);
  }, [todo]);

  function handleCancel() {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  }

  function handleEdit(event) {
    setWorkingTitle(event.target.value);
  }

  function handleUpdate(event) {
    if (!isEditing) return;
    event.preventDefault();
    onUpdateTodo({
      ...todo,
      title: workingTitle,
      isCompleted: todo.isCompleted,
    });

    setIsEditing(false);
  }

  return (
    <li className={styles.item}>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <StyledButton type="button" onClick={handleCancel}>
              Cancel
            </StyledButton>
            <StyledButton type="button" onClick={handleUpdate}>
              Update
            </StyledButton>
          </>
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
