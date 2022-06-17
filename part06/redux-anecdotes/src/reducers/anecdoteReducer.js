import { createSlice } from '@reduxjs/toolkit'
//import axios from 'axios'

import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        displayVote (state, action) {
            const changedAnecdote = action.payload
            return state
                .map(anec=> {
                    return anec.id !== changedAnecdote.id ? anec : changedAnecdote
                })
                .sort((a,b)=>(b.votes-a.votes))
        
        },
        appendAnecdote (state, action) {
            state.push(action.payload)
        },
        setAnecdotes (state, action) {
            return action.payload
        }
    }
})


export const { createNew, displayVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const voteFor = anecdote =>{
    return async dispatch => {
        const changedAnec = await anecdoteService.voteForAnecdote(anecdote)
        dispatch(displayVote(changedAnec))
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes.sort((a, b) => b.votes - a.votes)))
    }
}

export const createAnecdote = content => {
    return async dispatch => {
        const newAnec = await anecdoteService.createAnecdote(content)
        dispatch(appendAnecdote(newAnec))
    }
}

export default anecdoteSlice.reducer