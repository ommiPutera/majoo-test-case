import { createStore } from 'redux';
import createRootReducer from './reducers';


const reducers = createRootReducer()

export const store = createStore(
  reducers,
);
