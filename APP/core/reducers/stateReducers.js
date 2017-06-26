export const languageReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.language = action.language
  localStorage.setItem("maxoftLanguage", action.language)
  return nextState
}

export const appReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.app = action.app
  return nextState
}

export const logoutReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.app = "login"
  localStorage.removeItem("auth-token")
  return nextState
}
