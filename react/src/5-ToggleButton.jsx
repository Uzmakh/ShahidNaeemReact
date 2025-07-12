import { useState } from "react";
import MyImg from "./MyImg";

function ToggleButton() {
  const [display, setDisplay] = useState(true);

  let divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  let btnStyle = { marginTop: "20px" };
  return (
    <>
      <div style={divStyle}>
        <h1>Toggle Button</h1>

        {/* conditional rendering with ternary operator */}
        {
          //display ? <h3>React</h3> : <h3>Angular</h3>
          display? <MyImg/>:null
        }

        <button
          onClick={() => {
            setDisplay(!display);
          }}
          style={btnStyle}
        >
          ON|OFF
        </button>
      </div>
    </>
  );
}

export default ToggleButton;
