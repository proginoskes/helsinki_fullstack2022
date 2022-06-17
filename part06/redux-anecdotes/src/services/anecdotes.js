import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (content) => {
    const newAnec = {
        content,
        id: getId(),
        votes: 0
    }
    const response = await axios.post(`${baseUrl}`, newAnec)
    return response.data
}

const voteForAnecdote = async (anecdoteToChange) => {
    const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
    }
    const response = await axios.put(`${baseUrl}/${changedAnecdote.id}`, changedAnecdote)
    return response.data
}

const anecdoteService = { 
    getAll,
    createAnecdote,
    voteForAnecdote
}

export default anecdoteService