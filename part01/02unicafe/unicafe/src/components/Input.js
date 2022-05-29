// define simple components with paren
const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Input = (props) =>{

    console.log(Object.keys(props.buttons))

    return(
        <div>
            <Button handleClick={()=>props.buttons[Object.keys(props.buttons)[0]][1](props.buttons[Object.keys(props.buttons)[0]][0]+1)} text={Object.keys(props.buttons)[0]}/>
            <Button handleClick={()=>props.buttons[Object.keys(props.buttons)[1]][1](props.buttons[Object.keys(props.buttons)[1]][0]+1)} text={Object.keys(props.buttons)[1]}/>
            <Button handleClick={()=>props.buttons[Object.keys(props.buttons)[2]][1](props.buttons[Object.keys(props.buttons)[2]][0]+1)} text={Object.keys(props.buttons)[2]}/>
        </div>
    );
}

export default Input;