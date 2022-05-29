const Part = (props) => {
    return(
        <div>
            <p>{props.part} {props.exercise}</p>
        </div>
    );
}

const Content = (props) =>{
    return (
        <div>
            {props.course.parts.map(unit => <Part part={unit.name} exercise={unit.exercises}/>)}
        </div>
    );
 }
 
 export default Content;