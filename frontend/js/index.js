const React = require('react')
import { render } from 'react-dom'
import App from './components/App'
import Login from './components/login'

render(
    <Login/>,
    document.getElementById('root')
)