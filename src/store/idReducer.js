import actionTypes from "./typeConstants";

const idReducer = (state = 1, action) => {
  if (action.type === actionTypes.getId) {
    return state + 1;
  }
  return state
}

export default idReducer