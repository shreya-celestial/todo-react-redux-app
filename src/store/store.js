import { combineReducers, createStore } from 'redux';
import todoReducer from './todoReducer';
import idReducer from './idReducer';

const reducers = combineReducers({
  todos: todoReducer,
  id: idReducer
})

const store = createStore(reducers, {});

export default store;