import { combineReducers } from 'redux'
import auth, { authInitialState } from './auth'

const appReducer = combineReducers({auth})

const initialState = appReducer({
  auth: authInitialState
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'RESET':
      // clear state and log out
      return appReducer({ ...state, ...initialState }, action)
  }
  return appReducer(state, action)
}

export default rootReducer