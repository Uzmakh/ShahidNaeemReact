import React, { useEffect, useState } from "react";

const UseEffectCompo = () => {
  let [count, setCount] = useState(1);
  let [data, setData] = useState(5);
  function oneCall() {
    console.log("Function executed once...");
    console.log("Counter:", count, " Data:", data);
  }

  useEffect(() => {
    oneCall();
  },[count,data]);

  return (
    <div>
      <h1>useEffect in React</h1>
      <h2>Counter:{count}</h2>
      <h2>Data: {data}</h2>
      <button onClick={() => setCount(count++)}>Count</button>
      <button onClick={() => setData(data + 5)}>Data</button>
    </div>
  );
};

export default UseEffectCompo;
