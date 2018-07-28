import { combineReducers } from 'redux'
import counter from './counter'
import auth, { authInitialState } from './auth'

export const appReducer = combineReducers({
  auth,
})

const initialState = appReducer({
  auth: authInitialState,
})

const rootReducer = (state, action) => {
  // TODO: maybe move these into a separate file?
  switch (action.type) {
    case 'RESET':
      // clear state and log out
      return appReducer({ ...state, ...initialState }, action)
    case 'PIXEL_INIT':
      // do some basic initialization
      // overwrite some auth fields with authFirstLoadState
      return appReducer({ ...state, auth: { ...state.auth, ...authFirstLoadState } }, action)
  }
  return appReducer(state, action)
}

export default rootReducer