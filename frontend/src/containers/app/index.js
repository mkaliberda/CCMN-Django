import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Login from '../../components/login'
import About from '../about'
import SignUp from '../../components/signup'
import Dashboard from '../../components/dashboard'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default App
