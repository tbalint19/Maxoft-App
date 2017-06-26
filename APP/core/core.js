import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './stateTree'

import {
  languageReducer,
  appReducer,
  logoutReducer
} from './reducers/stateReducers'

import {
  modalOpenReducer,
  modalClosedReducer
} from './reducers/viewReducers'

import {
  inputReducer,
  userSelectedReducer
} from './reducers/actionReducers'

import {
  requestReducer,
  resetResponseReducer,
  loginResponseReducer,
  userDataReducer,
  firmDataReducer,
  usersDataReducer,
  addResponseReducer
} from './reducers/responseReducers'

const core = (() => {

  const initialState = Object.assign({}, stateTree)
  initialState.state.language = localStorage.maxoftLanguage ?
    localStorage.maxoftLanguage :
    navigator.language == "hu" ? "hu" : "eng"
  initialState.state.app = localStorage['auth-token'] ? "mainController" : "login"

  const reducer = (current = initialState, action) => {
    switch (action.type) {
      case "APP_REQUESTED":
        return appReducer(current, action)
      case "LANGUAGE_CHANGED":
        return languageReducer(current, action)
      case "MODAL_OPENED":
        return modalOpenReducer(current, action)
      case "MODAL_CLOSED":
        return modalClosedReducer(current, action)
      case "INPUT_FIELD_CHANGED":
        return inputReducer(current, action)
      case "LOGOUT":
        return logoutReducer(current, action)
      case "REQUEST_MADE":
        return requestReducer(current, action)
      case "LOGIN_RESPONSE_ARRIVED":
        return loginResponseReducer(current, action)
      case "LOGOUT_RESPONSE_ARRIVED":
        return logoutResponseReducer(current, action)
      case "RESET_RESPONSE_ARRIVED":
        return resetResponseReducer(current, action)
      case "USER_DATA_ARRIVED":
        return userDataReducer(current, action)
      case "FIRM_DATA_ARRIVED":
        return firmDataReducer(current, action)
      case "ADD_RESPONSE_ARRIVED":
        return addResponseReducer(current, action)
      case "USERS_ARRIVED":
        return usersDataReducer(current, action)
      case "USER_SELECTED":
        return userSelectedReducer(current, action)
      default:
        return Object.assign({}, current)
    }
  }

  const store = createStore(reducer)
  store.JSONtransfer = createApiController(store)

  return {store}

})()

export default core
