import { combineReducers } from 'redux';
import counter from './counter';
import todoList from './todoList';

const createRootReducer = () => combineReducers({
  counter,
  todoList,
})

export default createRootReducer;