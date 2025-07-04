const PropsDefaultValue = ({userName="Guest User"}) => {
    return (
        <>
            <h1>Passing default value to Props</h1>
            <p>User Name:{userName}</p>
            <hr />
        </>
    )
}
export default PropsDefaultValue;