const Filter = (props) => {
    return(
    <div>
        filter records by name: <input 
          value={props.entry}
          onChange={props.entryFunc}
        />
    </div>
    )
}
export default Filter;