import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(
        state => {
            return state.notif.text
        }
    )
    const display = useSelector(
        state => {
            return state.notif.display
        }
    )

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return (
        display &&
            <div style={style}>
                {notification}
            </div>
    )
    
}

export default Notification