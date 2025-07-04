import { useState } from "react";
import MyImg from "./MyImg";

function ToggleButton() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1>Toggle Button</h1>

      <button onClick={() => setDisplay(!display)}>ON | OFF</button>
      <br />
      <br />
      {
        //display?<>React<h2/>:<display>Angular<h2/>

        display ? <MyImg /> : null
      }
    </>
  );
}

export default ToggleButton;
