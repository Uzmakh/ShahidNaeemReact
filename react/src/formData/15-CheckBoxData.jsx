import { useState } from "react";

function CheckBoxData() {
  const [hobby, setHobby] = useState([]);

  //* To call the function whether a checkbox is checked or unchecked
  const hobbies = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      setHobby([...hobby, event.target.value]);
      console.log([...hobby, event.target.value]);
    } else {
      setHobby([...hobby.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <>
      <h1>Tutorial-24</h1>
      <h1>How to retrieve checkbox data</h1>
      <h2>Select your hobbies:</h2>

      <input
        type="checkbox"
        onChange={hobbies}
        name=""
        id="cooking"
        value="cooking"
      />
      <label htmlFor="cooking">Cooking</label>
      <br />
      <input
        type="checkbox"
        onChange={hobbies}
        name=""
        id="driving"
        value="driving"
      />
      <label htmlFor="driving">Driving</label>
      <br />
      <input
        type="checkbox"
        onChange={hobbies}
        name=""
        id="swimming"
        value="swimming"
      />
      <label htmlFor="swimming">Swimming</label>
      <br />
      <input
        type="checkbox"
        onChange={hobbies}
        name=""
        id="reading"
        value="reading"
      />
      <label htmlFor="reading">Reading</label>
      <br />
      <input
        type="checkbox"
        onChange={hobbies}
        name=""
        id="gardening"
        value="gardening"
      />
      <label htmlFor="gardening">Gardening</label>
      <br />
      <input
        type="checkbox"
        onChange={hobbies}
        name=""
        id="music"
        value="music"
      />
      <label htmlFor="music">Music</label>

      <h3>{hobby.toString()}</h3>
    </>
  );
}

export default CheckBoxData;
