export default function ItemInput(props) {
    return (
        <form onSubmit={(event) => {
            // event.preventDefault()
            props.handleSubmit()
        }}>
            <h2>New Item</h2>
            <input type="text" name="name" value={props.newItem.name} onChange={props.handleChange}></input>
        </form>
    )
}