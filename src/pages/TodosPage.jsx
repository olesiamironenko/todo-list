import TodoForm from '../features/TodoForm';
import TodoList from '../features/TodoList/TodoList';
import TodosViewForm from '../features/TodosViewForm';

function TodosPage({
  todoList,
  isSaving,
  isLoading,
  errorMessage,
  addTodo,
  updateTodo,
  completeTodo,
  revertTodo,
  clearError,
  queryString,
  setQueryString,
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
}) {
  return (
    <div>
      <TodoForm onAddTodo={addTodo} isSaving={isSaving} />
      <TodoList
        todoList={todoList}
        onUpdateTodo={updateTodo}
        onCompleteTodo={completeTodo}
        onRevertTodo={revertTodo}
        isLoading={isLoading}
      />
      <TodosViewForm
        queryString={queryString}
        setQueryString={setQueryString}
        sortField={sortField}
        setSortField={setSortField}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        errorMessage={errorMessage}
        clearError={clearError}
      />
    </div>
  );
}

export default TodosPage;
