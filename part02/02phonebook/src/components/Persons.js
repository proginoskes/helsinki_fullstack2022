const Persons = (props) => {
    //console.log(props.persons)
    return(
        <div>
            {
                props.persons.filter(person => person.name.includes(props.filterName))
                .map((person) => {
                return(
                    <p key={person.id}>
                        {person.name}: {person.number} 
                        <button onClick={() => props.deleteFunc(person.id)}>delete</button>
                    </p>
                );
                })
            }
        </div>
    )
}

export default Persons;