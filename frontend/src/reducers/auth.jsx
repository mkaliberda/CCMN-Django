import { createReducer, createAction } from 'redux-act'
import axios from 'axios'

export const setLoadedUser = createAction('save user info')
export const setLoggedIn = createAction('set if user is logged in')
export const setEmailAddress = createAction('set current user email address')
export const saveToken = createAction('store access and refresh token')

export const authInitialState = {
    isLoggedIn: false,
    username: '',
    me: {},
    token: {},
}

export const signup = params => dispatch => {
    console.log(params)
    return axios.post('/auth/register/', {
        first_name: params.firstName,
        last_name: params.lastName,
        username: params.username,
        password: params.password,
        email: params.email,
        profile: {
            text: params.website,
        },
    }).then(res => {
        if (res.data.success !== true && res.data.message) {
            throw new Error(res)
          }
        const user = dispatch(handleSuccessfulLogin(res.data))
        if (!user){
            console.error('Got invalid signup response', res.data)
            throw new Error(res)
        } 
        return user
    })
}

export const handleSuccessfulLogin =
userRes =>
  dispatch => {
    console.log(userRes)
    if (!userRes.user || !userRes.token) {
      console.error('got invalid user response passed to handleSuccessfulLogin', userRes)
      return
    }
    // response shape
    const {
      user, token
    } = userRes

    dispatch(setEmailAddress(user.email)) // save it
    dispatch(saveToken(token)) // save it
    dispatch(loadedUser(user))
    return user
  }

/**
 * Private method, call when we've received a user response from the API.
 * This fetches additional info that we should load whenever logging in etc.
 * @param {Object} user - user response
 */
function loadedUser(user) {
    return dispatch => {
      // FIXME: convert to single event
      dispatch(setLoadedUser(user))
      dispatch(setLoggedIn(true))
    }
  }

/**
   * @event setEmailAddress - save last-used email address to localstorage
   * @property {string} emailAddress
 */
export default createReducer({
    [setEmailAddress]: (state, emailAddress) => {
        if (!emailAddress)
          console.warn('saving empty email address')
        // save it
        window.localStorage.setItem(_getEmailAddressLocalStorageKey(), emailAddress)
        return { ...state, emailAddress }
      },

   /**
   * @event setLoadedUser - got user info from server
   * @property {object} me - user info response
   */
  [setLoadedUser]: (state, me) => ({
    ...state,
    me,
    username: me.username,
    id: me.id,
    firstLoadComplete: true,
  }),
   /**
   * @event saveToken - store JWT auth tokens to localStorage
   * @property {{ access_token: string, access_token_expiration: string, refresh_token: string}} token
   */

  [saveToken]: (state, token) => {
    if (!state.emailAddress) {
      console.error('attempting to save token without email address - rejected')
      return state
    }

    // save it for later
    window.localStorage.setItem(_getAuthStorageKey(state.emailAddress), JSON.stringify(token))

    // let other components (i.e. angular-land) know that a new token was saved to storage
    // this.mb.postMessage(MB_AUTH_TOKEN_UPDATED)

    return { ...state, token }
  },

   /**
   * @event setLoggedIn - change logged-in state
   * @property {boolean} isLoggedIn
   */
  [setLoggedIn]: (state, isLoggedIn) => ({ ...state, isLoggedIn, isAuthenticating: false }),
})