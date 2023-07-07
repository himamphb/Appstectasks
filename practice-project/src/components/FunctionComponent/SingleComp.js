import React, { useEffect, useState } from "react";

export default function SingleComp() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  function resetTimer() {
    setTimer(0);
  }

  useEffect(() => {
    
    // let interVal = setInterval(() => {
    //   setTimer(timer + 1);
    // }, 1000);
    // return () => {
    //   clearInterval(interVal);
    // };
  }, [timer]);

  return (
    <>
      <div>counter App</div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr></hr>
      <div>Timer</div>
      <div>{timer}</div>
      <div>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}
