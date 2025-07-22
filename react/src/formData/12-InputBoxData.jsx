import { useState } from "react";

const InputBoxData = () => {
    const [val, setVal] = useState("");

    return (
        <>
            <h4>How to get/display value from Input Box</h4>

            {/* with console.log */}
            <input type="text" placeholder="Enter your name" onChange={(event) => console.log(event.target.value)} />

            {/* with UI update */}
            <input type="text" value={val} placeholder="Enter your name" onChange={(event) => setVal(event.target.value)} />

            <h4>{val}</h4>

            <button onClick={()=>setVal("")}>Reset Form</button>
        </>
    )
}
export default InputBoxData;