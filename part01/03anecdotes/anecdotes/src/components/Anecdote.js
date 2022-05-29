const Anecdote = (props) =>{
    return(
    <div>
        <h1>{props.caption}</h1>
        <p>{props.anecdote}</p>
        <p>Number of votes: {props.vote_num}</p>
    </div>
    )
}

export default Anecdote;