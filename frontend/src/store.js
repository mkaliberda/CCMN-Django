import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createHashHistory'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'
import { performFirstAuthLoad } from './reducers/auth'
import localforage from 'localforage'


export default function configureStore ({ initialState, persist = true }) {

  const middleware = [thunk]

  persist = persist && process.env.REDUX_PERSIST

  if (!history)
    history = createHistory()

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
  }
  // configure router
  middleware.push(routerMiddleware(history))

  let reducer = rootReducer

  const persistConfig = {
    key: `ccmn:${process.env.ENV_NAME}:v${process.env.STORE_VERSION}`,
    // debug: process.env.DEBUG,
    storage: localforage,
    whitelist: ['routing', 'auth'],
  }
  reducer = persistReducer(persistConfig, rootReducer)

  // compose middleware
  let middlewareComposed = applyMiddleware(...middleware)

  // create store
  const store = createStore(
    reducer,
    initialState, // initialState
    middlewareComposed,
  )

  // callback for when state is loaded
  const stateRehydrated = () => {
    // do some simple initialization
    store.dispatch({ type: 'INIT' })

    // now check authentication status
    store.dispatch(performFirstAuthLoad())
  }

  // persist store
  const persistor = persistStore(store, null, stateRehydrated)

  return { store, persistor }
}