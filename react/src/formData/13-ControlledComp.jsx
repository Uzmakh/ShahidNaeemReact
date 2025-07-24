import React, { useState } from "react";

const ControlledComp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function clearData() {
    setName("");
    setPassword("");
    setEmail("");
  }

  return (
    <div>
      {/* <form action="#"> */}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your Name"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter your password"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
      />
      <br />
      <button>Submit</button>
      <button onClick={clearData}>Clear Data</button>

      {/* </form> */}

      {/* To display the input data */}
      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default ControlledComp;
