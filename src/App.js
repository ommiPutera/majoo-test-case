import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { COUNTING } from "./constants/reducerCase"

function App() {
  const dispatch = useDispatch();

  const { count } = useSelector(state => state.counter);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch({ type: COUNTING })}>increament</button>
    </div>
  );
}

export default App;
