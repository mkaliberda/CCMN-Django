import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../reducers/auth'
import 'antd/dist/antd.css'
import { Button } from 'antd'

class Logout extends React.Component {
    render () {
        return (
            <Button onClick={() => this.props.logout()}>Logout</Button>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Logout)