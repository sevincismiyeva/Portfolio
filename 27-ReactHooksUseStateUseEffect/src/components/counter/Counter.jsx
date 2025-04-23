import React, { useState } from "react";
import style from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const plus = () => setCount(count + 1);

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  const increment = () => {
    const value = +num;
    if (value > 0) {
      setCount((indiki) => indiki + value);
    }
  };

  const decrement = () => {
    const value = +num;
    if (value > 0) {
      setCount((indiki) => (indiki - value >= 0 ? indiki - value : 0));
    }
  };

  return (
    <div className={style.main}>
      <div className={style.counter}>
        <h2>{count}</h2>
        <div className={style.btn1}>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
        </div>
        <input
          type="number"
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter the number" className={style.input}
        />
        <div className={style.btn2}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        <button onClick={reset} className={style.reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
