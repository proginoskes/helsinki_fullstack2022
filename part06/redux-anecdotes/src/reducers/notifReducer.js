import { createSlice } from '@reduxjs/toolkit'

const initialNotif = {
    text: '',
    display: false
}

const notifSlice = createSlice({
    name: 'notif',
    initialState: initialNotif,
    reducers: {
        showNotif (state, action) {
            state.text = action.payload
            state.display = true
            console.log(action.payload)
            return state
        },
        hideNotif (state) {
            state.text = ''
            state.display = false
            return state
        }
    }
})

export const { showNotif, hideNotif } = notifSlice.actions

export const notify = (content, timeout) => {
    return async dispatch => {
        dispatch(showNotif(content))
        setTimeout(() => {
            dispatch(hideNotif())
        }, (timeout * 1000))
    }
}

export default notifSlice.reducer