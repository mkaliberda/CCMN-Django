import React from 'react'
import { Route, Link } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Button } from 'antd'
import Login from '../../components/login'
import About from '../about'
import SignUp from '../../components/signup'
import Dashboard from '../../components/dashboard'
import { persistor } from '../../store'
import AuthenticatedRoute from '../../components/authenticatedRoute'
import 'antd/dist/antd.css'
import { logout } from '../../reducers/auth'
import Logout from './logout'
import Nav from '../../components/nav/index'

const App = () => (
  <PersistGate loading={null} persistor={persistor}>
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Logout />
      </header>
      <Nav>
        <main>
          <Route exact path="/" component={Login} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
        </main>
      </Nav>
    </div>
  </PersistGate>
)

export default App
