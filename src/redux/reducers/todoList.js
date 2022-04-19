import {
  CHANGE_TAB, CHECKED_TODO, CREATE_TODO,
  GET_DONE_TODO, GET_NOT_DONE_TODO, REMOVE_TODO,
  UPDATE_TODO
} from "../../constants/reducerCase";

const defaultState = {
  itemsNotDone: [],
  itemsDone: [],
  tab: 'not-done-list',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_NOT_DONE_TODO:
      return {
        ...state,
        itemsNotDone: action.data
      };
    case GET_DONE_TODO:
      return {
        ...state,
        itemsDone: action.data
      };
    case CREATE_TODO:
      return {
        ...state,
        itemsNotDone: [...state.itemsNotDone, action.data],
      };
    case REMOVE_TODO:
      return {
        ...state,
        itemsNotDone: action.data
      };
    case UPDATE_TODO:
      return {
        ...state,
        itemsNotDone: action.status === 0 ? action.data : state.itemsNotDone,
        itemsDone: action.status === 1 ? action.data : state.itemsDone
      };
    case CHECKED_TODO:
      return {
        ...state,
        itemsDone: [...state.itemsDone, action.dataItemsDone]
      };
    case CHANGE_TAB:
      return {
        ...state,
        tab: action.tabName,
      };
    default:
      return state;
  }
}


export default reducer;