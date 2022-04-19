import { COUNTING } from "../../constants/reducerCase";

const defaultState = {
  count: 0,
  string: ''
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case COUNTING:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}


export default reducer;