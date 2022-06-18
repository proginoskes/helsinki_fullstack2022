//import { useSelector } from 'react-redux'

import { connect } from 'react-redux'

const Notification = (props) => {
    const notification = () => {
        return props.notif.text
    }

    const display = () => {
        return props.notif.display
    }

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    return (
        display() &&
            <div style={style}>
                {notification()}
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notif: state.notif
    }
}

//export default Notification
const ConnectedNotification = connect(
    mapStateToProps
)(Notification)
export default ConnectedNotification