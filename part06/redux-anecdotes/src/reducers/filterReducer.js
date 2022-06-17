import { createSlice } from '@reduxjs/toolkit'

const initTerm = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState: initTerm,
    reducers: {
        setFilter (state, action) {
            state = action.payload
            return state
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer