export const modalOpenReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.modal = action.modal
  nextState.state.reset.status = "start"
  return nextState
}

export const modalClosedReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.modal = null
  return nextState
}
