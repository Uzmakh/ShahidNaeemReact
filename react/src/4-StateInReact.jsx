import { useState } from "react";

// function StateInReact() {
// let myCity = "Multan";    //step-1

// const changeCity = () => {    //step-3-a
//     myCity = "Lahore";   //*we change our variable in this function, and we want to render the action, by it, but it wont as we do,
//     alert(myCity);    //*to check it, we call an alert, and it is working...but myCity doesn't change from Multan to Lahore
// }
//     return (
//         <>
//  <h1>State in React</h1>
//             {/* //step-2 */}
//    <h2>{myCity}</h2>
//    {/* //step3-b */}
//   <button onClick={changeCity}>Change City</button>             {/* There's no change in the UI,by taking variable */}
//         </>
//    )
//  }

function StateInReact() {
  const [city, setCity] = useState("Lahore");

//   const changeCity = () => {
//     setCity("Multan");
//   };
  return (
    <>
      <h1>State in React</h1>

      <h2>{city}</h2>
      {/* <button onClick={changeCity}>Change City</button> */}

       {/* Alternatively, with arrow function; no need to declare function explicitly.  */}
      <button
        onClick={() => {
          setCity("Jamshoro");
        }}
      >
        Change City
      </button>
    </>
  );
}
export default StateInReact;
