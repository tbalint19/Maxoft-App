export const requestReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses.push(action.request)
  return nextState
}

export const resetResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter(request => request != "reset")
  nextState.state.reset.status = action.data.isSuccessful ? "success" : "error"
  if (action.data.isSuccessful){
    nextState.state.reset.username = ""
  }
  return nextState
}

export const loginResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter(request => request != "login")
  if (action.data.isSuccessful){
    nextState.state.app = "mainController"
    nextState.state.login.username = ""
    nextState.state.login.password = ""
    localStorage.setItem("auth-token", action.data.authToken)
  }
  nextState.state.login.status = action.data.isSuccessful ? "success" : "error"
  return nextState
}

export const userDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.user.id = action.data.user[0];
  nextState.data.user.username = action.data.user[2];
  return nextState
}

export const firmDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.firm.id = action.data.firm[0];
  nextState.data.firm.name = action.data.firm[2];
  return nextState
}

export const addResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  console.log(action);
  return nextState
}

export const usersDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.users = action.data.users.map((user) => (
    {id: user[0], firmId: user[1], tsz: user[2], title: user[3], name: user[4] + " " + user[5],
      password: user[6], birthDate: user[8], username: user[13], regDate: user[12].split(" ")[0]}
  ))
  nextState.state.reFetchNeeded = false
  return nextState
}
