


function ObjectData({employee}) {
  console.log(employee)
  let styles = {
    fontSize: "18px",
    fontWeight: "bold"
  }
    return (
        <>
            <div style={styles}>
            <p>employee name: {employee.name}</p>
            <p>employee age: {employee.age}</p>
            <p>employee salary: {employee.salary}</p>
          <p>employee email: {employee.email}</p>
        </div>
            <hr/>
        </>
    )
}
export default ObjectData;