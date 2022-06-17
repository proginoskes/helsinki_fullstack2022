import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer from './reducers/anecdoteReducer'
import notifReducer from './reducers/notifReducer'
import filterReducer from './reducers/filterReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notif: notifReducer,
        filter: filterReducer
    }
})

export default store