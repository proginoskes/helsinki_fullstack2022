// const handleNameChange = (event) => {
//     setNewName(event.target.value);
// }
// const handleNumberChange = (event) => {
//     setNewNumber(event.target.value);
// }

const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.submitFunc}>
                {
                    props.inputs.map((inputfield) => {
                        return(
                            <div key={inputfield.id}>
                                {inputfield.label}: 
                                <input 
                                    value={inputfield.entry}
                                    onChange={
                                        (event) =>inputfield.entryFunc(event.target.value)
                                    }
                                />
                            </div> 
                        )
                    })
                }
                <div>
                <button type="submit">{props.submitText}</button>
                </div>
            </form>
        </div>
    )
} 
export default PersonForm;