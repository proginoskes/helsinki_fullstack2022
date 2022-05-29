const Total = (props) =>{
    return(
        <div>
            <p>Number of exercises {props.course.parts.map((pair)=>(pair.exercises)).reduce((partialsum, a)=>(partialsum+a))}</p>
        </div>
    );
}

export default Total;