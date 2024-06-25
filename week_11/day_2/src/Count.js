import { useReducer, useState, useRef } from "react";
import { useEffect } from "react";

// function reducer(state = 0, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }

export function Count() {
  //   const [state, dispatch] = useReducer(reducer, 0);

  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    previousCount.current += 1
  });

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      {previousCount.current}
    </div>
  );
}
