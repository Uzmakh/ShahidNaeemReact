import { useState } from "react";

function RadioAndDropDown() {
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("Multan");
  return (
    <>
      <h4>Tutorial # 25</h4>
      <h1>Radio Buttons <br/>And DropDown Menu</h1>
      <h2>Select Gender:</h2>
      <input
        type="radio"
        checked={gender == "Male"}
        value="Male"
        name="gender"
        id="male"
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        checked={gender == "Female"}
        value="Female"
        name="gender"
        id="female"
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h3>Gender: {gender}</h3>

      <h2>Select City:</h2>
      <select defaultValue={"Multan"} name="" id="" onChange={(event)=>setCity(event.target.value)}>
        <option value="Lahore">Lahore</option>
        <option value="karachi">Karachi</option>
        <option value="Peshawar">Peshawar</option>
        <option value="Quetta">Quetta</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Multan">Multan</option>
      </select>

      <br />
      <h3>Selected City: {city}</h3>
    </>
  );
}
export default RadioAndDropDown;
