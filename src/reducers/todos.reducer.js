const actions = {
  //actions in useEffect that loads todos
  fetchTodos: 'fetchTodos',
  loadTodos: 'loadTodos',

  //found in useEffect and addTodo to handle failed requests
  setLoadError: 'setLoadError',

  //actions found in addTodo
  startRequest: 'startRequest',
  addTodo: 'addTodo',
  endRequest: 'endRequest',

  //found in helper functions
  updateTodo: 'updateTodo',
  completeTodo: 'completeTodo',

  //reverts todos when requests fail
  revertTodo: 'revertTodo',

  //action on Dismiss Error button
  clearError: 'clearError',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.fetchTodos:
      return {
        ...state,
        isLoading: true,
      };

    case actions.loadTodos:
      return {
        ...state,
        todoList: action.records.map((record) => {
          const todo = {
            id: record.id,
            ...record.fields,
          };
          if (!todo.isCompleted) {
            todo.isCompleted = false;
          }
          return todo;
        }),
        isLoading: false,
      };

    case actions.setLoadError:
      return {
        ...state,
        errorMessage: action.error.message,
        isLoading: false,
      };

    // ADD TODO flow (pessimistic)
    case actions.startRequest:
      return {
        ...state,
        isSaving: true,
      };

    case actions.addTodo:
      // savedTodo comes from action.payload
      const savedTodo = {
        ...action.payload,
        isCompleted:
          action.payload.isCompleted === undefined
            ? false
            : action.payload.isCompleted,
      };
      return {
        ...state,
        todoList: [...state.todoList, savedTodo],
        isSaving: false,
      };

    case actions.endRequest:
      return {
        ...state,
        isLoading: false,
        isSaving: false,
      };

    // OPTIMISTIC UI updates
    case actions.revertTodo:
    // fall-through to updateTodo
    case actions.updateTodo: {
      // revertTodo and updateTodo shared logic
      const updatedTodos = state.todoList.map((todo) =>
        todo.id === action.editedTodo.id
          ? { ...todo, ...action.editedTodo }
          : todo
      );

      const updatedState = {
        ...state,
        todoList: updatedTodos,
      };

      if (action.error) {
        updatedState.errorMessage = action.error.message;
      }

      return updatedState;
    }

    case actions.completeTodo: {
      const updatedTodos = state.todoList.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: true } : todo
      );

      return {
        ...state,
        todoList: updatedTodos,
      };
    }

    case actions.clearError:
      return { ...state, errorMessage: '' };

    default:
      return state;
  }
}

const initialState = {
  // all the states that was used with useState
  todoList: [], // was useState([])
  isLoading: false, // was useState(false)
  isSaving: false, // was useState(false)
  errorMessage: '', // was useState("")
};

// named export
export { initialState };
