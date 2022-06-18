//import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notifReducer'

import { connect } from 'react-redux'

const AnecdoteList = (props) => {
    const anecdotes = () => {
        return props.anecdotes.filter(
            anecdote => anecdote.content.includes(props.filter)
        )
    }

    const vote = async (props, anecdote) => {
        props.notify(`You voted for '${anecdote.content}'`, 3)
        props.voteFor(anecdote)
    }

    return(
        <div>
            {anecdotes()
            .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(props, anecdote)}>vote</button>
                    </div>
                </div>
            )}
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
    voteFor,
    notify
}

//export default AnecdoteList
const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList