import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, persistor, history } from './store'
import App from './containers/app'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'

const target = document.querySelector('#root')

console.log(store, persistor)

render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
      </ConnectedRouter>
      </PersistGate>
  </Provider>,
  target
)
