import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Login } from './components/login'

class CCMNApp extends React.Component {
    render() {
        return (
            <ConnectedRouter>
                <Route path="./login" component={Login} />
            </ConnectedRouter>
        )
    }
}

export default CCMNApp