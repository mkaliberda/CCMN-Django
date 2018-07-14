import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Login from '../../components/login'
import About from '../about'
import SignUp from '../../components/signup'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/signup" component={SignUp} />
    </main>
  </div>
)

export default App
