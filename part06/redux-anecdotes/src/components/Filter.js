import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const deployChange = (event) => {
        dispatch(setFilter(event.target.value))
    }
    return(
        <div>
            <input 
                name="filterStr"
                type="text"
                placeholder="filter anecdotes"
                onChange={deployChange}
            />
        </div>
    )
}

export default Filter