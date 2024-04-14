import React, { useState } from "react";

function Counter() {
  const [number, countChange] = useState(0);
  return (
    <div>
      <button onClick={() => countChange(number-1)}>-</button>
      {number}
      <button onClick={() => countChange(number+1)}>+</button>
    </div>
  );
}

export default Counter;
