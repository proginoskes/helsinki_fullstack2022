const Total = (props) =>{
    return(
        <div>
            <p>Number of exercises {props.exercises.reduce((partial_sum, a)=>partial_sum + a)}</p>
        </div>
    );
}

export default Total;