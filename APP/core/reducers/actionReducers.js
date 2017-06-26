export const inputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (action.field == "loginUsername") {
    nextState.state.login.username = action.value
    nextState.state.login.status = "start"
  }
  if (action.field == "loginPassword") {
    nextState.state.login.password = action.value
    nextState.state.login.status = "start"
  }
  if (action.field == "resetUsername") {
    nextState.state.reset.username = action.value
    nextState.state.reset.status = "start"
  }
  if (action.field == "searchFirm") {
    nextState.state.searchParams.firmID = action.value
    nextState.state.reFetchNeeded = true
  }
  if (action.field == "searchID") {
    nextState.state.searchParams.ID = action.value
    nextState.state.reFetchNeeded = true
  }
  if (action.field == "searchUsername") {
    nextState.state.searchParams.username = action.value
    nextState.state.reFetchNeeded = true
  }
  if (action.field == "searchBirth") {
    nextState.state.searchParams.birthDate = action.value
    nextState.state.reFetchNeeded = true
  }
  if (action.field == "searchName") {
    nextState.state.searchParams.name = action.value
    nextState.state.reFetchNeeded = true
  }
  if (action.field == "newTsz") {
    nextState.state.newUser.tsz = action.value
  }
  if (action.field == "newUsername") {
    nextState.state.newUser.username = action.value
  }
  if (action.field == "newEmail") {
    nextState.state.newUser.email = action.value
  }
  if (action.field == "newPassword") {
    nextState.state.newUser.password = action.value
  }
  if (action.field == "newPasswordAgain") {
    nextState.state.newUser.passwordAgain = action.value
  }
  return nextState
}

export const userSelectedReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.selectedUser = nextState.data.users.filter(user => user.id == action.id)[0]
  nextState.state.modal = "editUser"
  return nextState
}
