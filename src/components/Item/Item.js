export default function Item(props) {
    return (
        <li onClick={() => props.buttonFn(props.id)}>
            {props.name}&nbsp;<button onClick={() => props.buttonFn(props.id)}>{props.buttonText}</button>
        </li>
    )
}