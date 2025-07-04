function JsCode() {
  // How to access variables in JSX
  const fullName = "Shahid Naeem";
  // let fullName;
  let age = 50;

  let x = 40;
  let y = 30;

  // function city() {
  //   alert("Lahore");
  // }

  // Use of if-else in  JSX
  function calc(a, b, ope) {
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
  // how to access object keys in JSX
  const emp = {
    empName: "Mustafa Ali",
    empSal: 45000,
    empEmail: "example@gmail.com",
  };
  // how to access array elements in JSX
  let colors = ["red", "blue", "green", "yellow"];
// use of image in JSX
  let myImg =
    "https://images.unsplash.com/photo-1604005387021-78472965cd6e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <h1>Tutorial # 11</h1>
      <h2>
        {fullName} is {age} years old.
        <br />
        {/* ternary operator */}
        {fullName ? fullName : "User is invalid"}
      </h2>
      <h2>{x + y}</h2>
      {/* {city()} */}
      {/* if-else conditions */}
      <h2>{calc(2, 12, "-")}</h2>
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
