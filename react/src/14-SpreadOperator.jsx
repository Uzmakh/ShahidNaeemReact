function SpreadOperator() {
  // * With Array
  const fruits = ["mango", "orange", "gauva", "banana"];
  const moreFruits = [...fruits, "pineapple", "grapes"];

  console.log(fruits);
  console.log(moreFruits);

  // * With Object
  const student = {
    name: "Sara",
    age: 12,
  };
  const newStudent = { ...student, class: "5th" };
  console.log(newStudent);

  // ? Spread Operator in React
  let maleStudents = ["Ali", "Hassan", "Naveed", "Nawaz", "Mohib"];
  let femaleStudents = ["Ayesha", "Zara", "Husna"];
  let allStudents = [...maleStudents, ...femaleStudents];

  console.log(allStudents);
  return (
    <>
      <h1>Tutorial-23</h1>
      <h1>Spread Operator</h1>
      <h2>List of All Students</h2>
      <ul>
        {allStudents.map((student, index) => (
          <li key={index}>{student.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}
export default SpreadOperator;
