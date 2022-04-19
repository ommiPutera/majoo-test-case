import {
  CHANGE_TAB, CHECKED_TODO, CREATE_TODO,
  GET_DONE_TODO, GET_NOT_DONE_TODO, REMOVE_TODO,
  UPDATE_TODO, COMPLETE_INFO_TODO
} from "../../constants/reducerCase";

const defaultState = {
  itemsNotDone: [],
  itemsDone: [],
  tab: 'not-done-list',
  completeInfo: false,
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
        itemsNotDone: [...state.itemsNotDone, action.data]
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
        itemsDone: [...state.itemsDone, action.dataItemsDone],
        completeInfo: true
      };
    case COMPLETE_INFO_TODO:
      return {
        ...state,
        completeInfo: false
      };
    case CHANGE_TAB:
      return {
        ...state,
        itemsNotDone: state.itemsNotDone.reverse(),
        itemsDone: state.itemsDone.reverse(),
        tab: action.tabName,
      };
    default:
      return state;
  }
}


export default reducer;