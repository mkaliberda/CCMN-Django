import React from 'react'
import { Route, Link } from 'react-router-dom'
import AuthentiatedRoute from '../../components/authenticatedRoute'
import Home from '../home'
import Login from '../../components/login'
import About from '../about'
import SignUp from '../../components/signup'
import Dashboard from '../../components/dashboard'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../../store'
import createHistory from 'history/createHashHistory'

const history = createHistory()
const { store, persistor } = configureStore({ history })

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
    <main>
    <PersistGate loading={null} persistor={persistor}>
      <Route exact path="/" component={Login} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/sign-up" component={SignUp} />
      <AuthentiatedRoute exact path="/dashboard" component={Dashboard} />
    </PersistGate>
    </main>
  </div>
)

export default App
