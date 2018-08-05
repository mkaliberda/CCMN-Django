import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Login from '../../components/login'
import About from '../about'
import SignUp from '../../components/signup'
import Dashboard from '../../components/dashboard'
import { persistor } from '../../store'
import { PersistGate } from 'redux-persist/integration/react'
import AuthenticatedRoute from '../../components/authenticatedRoute'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { logout } from '../../reducers/auth'

const App = ({ logout }) => (
  <PersistGate loading={null} persistor={persistor} >
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Button onClick={logout()}>Logout</Button>
    </header>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/sign-up" component={SignUp} />
      <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
  </PersistGate>
)

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(App)