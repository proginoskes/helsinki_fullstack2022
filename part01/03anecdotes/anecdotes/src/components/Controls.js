const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const Controls = (props) => {
    return(
        <div>
            <Button text={props.btn_info.btns[1].text} handleClick={
                ()=>{
                    const new_votes = [...props.btn_info.btns[1].data];
                    new_votes[props.btn_info.btns[1].anecdote] += 1;
                    props.btn_info.btns[1].func(new_votes);
                }
            }/>
            <Button text={props.btn_info.btns[0].text} 
            handleClick={
                ()=>props.btn_info.btns[0].func(
                    Math.floor(Math.random() * props.btn_info.num_anecdotes)
                    )
                }/>
        </div>
    )
}
export default Controls;