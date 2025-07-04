import { useState } from "react";

function AssignmentOne() {
    const [count, setCount] = useState(1);
    return (
        <>
<h1>Hit Counter</h1>
            <h2>Counter:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </>
    )
}
export default AssignmentOne;