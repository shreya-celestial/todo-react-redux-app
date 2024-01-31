import actionTypes from './typeConstants'

const INITIAL_STATE = []

const todoReducer = (state = INITIAL_STATE, action) => {

  if (action.type === actionTypes.newTodo) {
    const newTodo = action.payload;
    const todos = [...state, newTodo];
    return todos;
  }

  if (action.type === actionTypes.delTodo) {
    const todoId = action.payload;
    const todos = state.filter((todo) => todo.id !== todoId);
    return todos;
  }

  return state
}

export default todoReducer;