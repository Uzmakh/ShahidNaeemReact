function EventFunction() {
    function myFunc() {
        alert("This is my function");
    }
    const city = () => {
        alert("Lahore")
    }
    const city1 = (cityName) => {
        alert(cityName);
    }
    return (
        <>
            <h1>Tutorial # 12</h1>
            <h1>Events Call In React</h1>
            {myFunc()}
            <button onClick={myFunc}>Press Me</button>
            <button onClick={city}>Lahore</button>
            <button onClick={()=>city1("Multan")}>Multan</button>
        </>
    )
}
export default EventFunction;