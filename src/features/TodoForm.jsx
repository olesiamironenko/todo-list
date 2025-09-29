import { useRef, useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';
import styles from '../shared/Form.module.css';
import StyledButton from '../shared/Button.jsx';

function TodoForm({ onAddTodo, isSaving }) {
  const todoTitleInput = useRef('');
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({
      title: workingTodoTitle,
      isCompleted: false,
    });
    todoTitleInput.current.focus();
    setWorkingTodoTitle('');
  }

  return (
    <form className={styles.form} onSubmit={handleAddTodo}>
      <TextInputWithLabel
        labelText="Todo:"
        elementId="todoTitle"
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(e) => setWorkingTodoTitle(e.target.value)}
      />
      <StyledButton type="submit" disabled={!workingTodoTitle || isSaving}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </StyledButton>
    </form>
  );
}

export default TodoForm;
