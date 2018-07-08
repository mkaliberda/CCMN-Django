const React = require('react')
import App from './components/App'
import Login from './components/login'
import createHistory from 'history/createHashHistory'
import configureStore from '../store/configureStore'
import Provider from 'react-redux'
import CCMNApp from './app'

const history = createHistory()
const { store, persistor } = configureStore({ history })

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
        <Component history={history}/>
        </Provider>,
        document.getElementById('root')
    )
}

render(
    CCMNApp
)