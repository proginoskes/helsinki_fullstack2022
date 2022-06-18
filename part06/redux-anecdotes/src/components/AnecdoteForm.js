//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
    }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" placeholder="write an anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
        notif: state.notif
    }
}


const mapDispatchToProps = {
    createAnecdote
}

// export default AnecdoteForm
const ConnectedAnecdoteForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm
