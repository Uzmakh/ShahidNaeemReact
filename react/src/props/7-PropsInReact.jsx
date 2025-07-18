// ? Props deal with how to transfer data from one component to another; usually from parent comp. to child comp

function PropsInReact({ fullName, age, address }) {
    return (
        <>
            <h1>Props In React</h1>
            <h2>Full Name: {fullName}</h2>
            <h2>Age: {age}</h2>
            <h2>Address: {address}</h2>
        </>
    )
}
export default PropsInReact;