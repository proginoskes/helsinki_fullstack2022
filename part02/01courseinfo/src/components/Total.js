const Total = (props) =>{
    return(
        <div>
            <h4>Number of exercises: {props.course.parts.map((unit)=>(unit.exercises)).reduce((partialsum, a)=>(partialsum+a))}</h4>
        </div>
    );
}

export default Total;