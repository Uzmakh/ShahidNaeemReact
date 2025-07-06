function JsCode() {
  //? How to access variables in JSX
  const fullName = "Shahid Naeem";
  //  let fullName;
  let age = 50;

  //? How to do calculation in JSX
  let x = 40;
  let y = 30;

  // ? Calling a function
  //  function city() {
  //     alert("Lahore");
  //   }

  // * function with parameters/arguments
  function calc(a, b) {
    return a + b;
  }

  //? Use of if-else in JSX
  function calcu(a, b, ope) {
    if (ope == "+") {
      return a + b;
    } else if (ope == "-") {
      return a - b;
    } else if (ope == "/") {
      return a / b;
    } else {
      return a * b;
    }
  }

  //? how to access object keys in JSX
  const emp = {
    empName: "Mustafa Ali",
    empSal: 45000,
    empEmail: "example@gmail.com",
  };

  //? how to access array elements in JSX
  let colors = ["red", "blue", "green", "yellow"];

  //? use of image in JSX
  let myImg =
    "https://images.unsplash.com/photo-1604005387021-78472965cd6e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <h1>Tutorial # 11</h1>
      {/* using variables in JSX */}
      <h2>
        {fullName} is {age} years old.
        <br />
        {/* ternary operator */}
        {fullName ? fullName : "User is invalid"}
      </h2>

      {/* calculation */}
      <h2>{x + y}</h2>

      {/* calling a function */}
      {/* {city()} */}

      {/* calling a function with parameters/arguments */}
      <h2>{calc(100, 30)}</h2>

      {/* if-else conditions */}
      <h2>{calcu(2, 12, "-")}</h2>

      {/* use of image */}
      <img src={myImg} width="300px" alt="" />

      {/* object values */}
      <h2>{emp.empSal}</h2>
      <h2>{emp.empAge}</h2>
      <h2>{emp.empEmail}</h2>

      {/* array elements */}
      <h2>Color:{colors[1]}</h2>

      {/* use of input field */}
      <input type="text" value={fullName} />
      <input type="text" value={emp.empEmail} />
    </>
  );
}

export default JsCode;
