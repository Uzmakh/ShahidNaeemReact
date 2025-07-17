import { useState } from "react";

function NumberToWords() {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>Number To Words</h1>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>Plus</button>
      <button onClick={() => setNum(num - 1)}>Minus</button>
      <button onClick={() => setNum(0)}>Reset</button>

      <h3>Range(0 to 5)</h3>
      
      {/* Putting multiple conditions with Ternery Operator */}
      {num === 0 ? (
        <h1>zero</h1>
      ) : num === 1 ? (
        <h1>one</h1>
      ) : num === 2 ? (
        <h1>two</h1>
      ) : num === 3 ? (
        <h1>three</h1>
      ) : num === 4 ? (
        <h1>four</h1>
      ) : num === 5 ? (
        <h1>five</h1>
      ) : (
        <h1>Out of Range</h1>
      )}
    </>
  );
}

export default NumberToWords;
