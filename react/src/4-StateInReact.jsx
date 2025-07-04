import { useState } from "react";

// function StateInReact() {
    // let myCity = "Multan";


    // const changeCity = () => {
    //     myCity = "Lahore";
    //     alert(myCity);
    // }
//     return (
//         <>
// <h1>State in React</h1>
            {/* <h2>{myCity}</h2> */}
//           
//             <button onClick={changeCity}>Change City</button>
//             {/* There's no change in the UI,by taking variable */}
//         </>
//     )
// }

function StateInReact() {
  
    const [ city, setCity ]= useState("Lahore");

    // const changeCity = () => {
    //     setCity("Multan") ;
    //     // alert(city);
    // }
    return (
        <>
<h1>State in React</h1>
          
            <h2>{city}</h2>
            <button onClick={() => {
                setCity("Jamshoro")
            }}>Change City</button>
           
        </>
    )
}
export default StateInReact;