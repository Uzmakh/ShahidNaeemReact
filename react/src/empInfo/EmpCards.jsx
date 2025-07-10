function EmpCards({ data }) {
  let cardStyles = {
    backgroundColor: "lightyellow",
    width: "300px",
    paddingTop: "25px",
    padding: "30px",
    marginBottom: "15px",
    textAlign: "left",
      border: '2px solid grey',
   borderRadius:'12px'
  };
  let detailStyles = {
    color: "grey",
  };

  return (
    <>
      <div style={cardStyles}>
        <h3>Employee Card</h3>
        <div style={detailStyles}>
          <h4>Emp.ID:{data.id}</h4>
          <h4>Name:{data.name}</h4>
          <h4>Age:{data.age}</h4>
          <h4>Salary:{data.salary}</h4>
          <h4>Email:{data.email}</h4>
        </div>
      </div>
    </>
  );
}
export default EmpCards;
