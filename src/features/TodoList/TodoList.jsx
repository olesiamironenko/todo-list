import { useEffect } from 'react';
import TodoListItem from './TodoListItem.jsx';
import styles from './TodoList.module.css';
import { useSearchParams, useNavigate } from 'react-router-dom';
import StyledButton from '../../shared/Button.jsx';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  // Pagination
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 15;

  const navigate = useNavigate();

  // Get current page number from the URL, or default to 1
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  // Calculate indexes for slicing the todo list
  const indexOfFirstTodo = (currentPage - 1) * itemsPerPage;
  const indexOfLastTodo = indexOfFirstTodo + itemsPerPage;

  // Slice the list for the current page
  const currentTodos = todoList.slice(indexOfFirstTodo, indexOfLastTodo);

  // Calculate total pages
  const totalPages = Math.ceil(todoList.length / itemsPerPage);

  // Pagination Handlers ---
  const handlePreviousPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    setSearchParams({ page: newPage });
  };

  const handleNextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    setSearchParams({ page: newPage });
  };

  // Protect against invalid or out-of-range page numbers
  useEffect(() => {
    if (
      isNaN(currentPage) || // not a number, e.g., "moose"
      currentPage < 1 || // too low
      currentPage > totalPages // too high
    ) {
      navigate('/'); // redirect to homepage
    }
  }, [currentPage, totalPages, navigate]);

  if (isLoading) {
    return <p>Todo list loading...</p>;
  }
  if (todoList.length === 0) {
    return <p>Add todo above to get started</p>;
  }

  return (
    <>
      <ul className={styles.list}>
        {currentTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={onCompleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </ul>

      {/* Pagination controls */}
      <div className={styles.paginationControls}>
        <StyledButton disabled={currentPage === 1} onClick={handlePreviousPage}>
          Previous
        </StyledButton>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <StyledButton
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </StyledButton>
      </div>
    </>
  );
}

export default TodoList;
