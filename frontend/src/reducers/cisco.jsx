import { createReducer, createAction } from 'redux-act'
import axios from 'axios'

export const saveOnlineUsers = createAction('save online users')

const url_cmx = 'https://cisco-cmx.unit.ua'
const username_cmx = 'RO'
const password_cmx = 'just4reading'
const url_presence = 'https://cisco-presence.unit.ua'
const username_presence = 'RO'
const password_presence = 'Passw0rd'
const aesUId = ''

export const ciscoInitialState = {
  onlineUsers: 0,
}

const getNumberOfOnlineUsersOptions = {
  method: 'GET',
  url: 'https://cisco-cmx.unit.ua/api/location/v2/clients/count/',
  headers: {
    Authorization: `Basic ${btoa(`${username_cmx}:${password_cmx}`)}`,
  },
  json: true
}

export const getNumberOfOnlineUsers = () => dispatch => axios(getNumberOfOnlineUsersOptions)
  .then(res => {
    if (res.data.count) {
      dispatch(saveOnlineUsers(res.data.count))
    }
  }).catch((err) => { console.warn(err) })

export default createReducer(
  {
    [saveOnlineUsers]: (state, onlineUsers) => ({
      ...state,
      onlineUsers,
    }),
  },
  ciscoInitialState
)
