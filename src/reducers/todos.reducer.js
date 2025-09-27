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
      };
    case actions.loadTodos:
      return {
        ...state,
      };
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
