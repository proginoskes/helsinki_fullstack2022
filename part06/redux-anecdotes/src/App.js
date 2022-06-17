
import { useDispatch } from 'react-redux'

import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'


import { initializeAnecdotes } from './reducers/anecdoteReducer'

//import anecdoteService from './services/anecdotes'
import { useEffect } from 'react'


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeAnecdotes())
    },[dispatch])

    return (
        <div>
        <h2>Anecdotes</h2>
        <Notification />
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
        </div>
    )
}

export default App