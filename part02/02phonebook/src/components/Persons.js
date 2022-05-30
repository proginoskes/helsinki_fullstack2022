const Persons = (props) => {
    return(
        <div>
            {
                props.persons.filter(person => person.name.includes(props.filterName))
                .map((person) => {
                return(<p key={person.id}>{person.name}: {person.number}</p>);
                })
            }
        </div>
    )
}

export default Persons;