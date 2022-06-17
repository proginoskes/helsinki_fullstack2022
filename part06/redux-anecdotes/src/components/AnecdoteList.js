import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notifReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        return state.anecdotes.filter(
            anecdote => anecdote.content.includes(state.filter)
        )
    })

    const vote = async (anecdote) => {
        dispatch(notify(`You voted for '${anecdote.content}'`, 3))
        dispatch(voteFor(anecdote))
    }

    return(
        <div>
            {anecdotes
            .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList