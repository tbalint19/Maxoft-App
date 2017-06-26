import React from 'react'
import Modal from 'maxoftModal'

class ForgottenModal extends Modal {
  reportChange(event, field){
    this.dispatch({type: "INPUT_FIELD_CHANGED", value: event.target.value, field: field})
  }
  requestReset(username){
    let action = {type: "RESET_RESPONSE_ARRIVED"}
    let data = {username: username}
    let requestUser = {method: "POST", destination: 'reset', action: action, data: data}
    this.JSONtransfer(requestUser)
    this.dispatch({type: "REQUEST_MADE", request: "reset"})
  }
  content(){
    let usernameValue = this.props.state.reset.username
    let language = this.props.state.language
    let status = this.props.state.reset.status
    let title = {eng: "Reset forgotten password", hun: "Elfelejtett jelszó visszaállítása"}
    let username = {eng: "Username", hun: "Felhasználónév"}
    let cancel = {eng: "Back", hun: "Vissza"}
    let reset = {eng: "Reset", hun: "Visszaállítás"}
    let success = {
      eng: "An email is sent to the related address.",
      hun: "Kiküldtünk egy emailt a megadott email címre."}
    let failure = {
      eng: "Invalid username!",
      hun: "Nem létező felhasználónév!"}
    let info = {
      eng: "Please enter your username. An email will be sent with the necessary info to the related email.",
      hun: "Kérem adja meg a felhasználónevet. Az ehhez rendelt email címre fogjuk küldeni a módosításhoz szükséges tudnivalókat."}
    return (
      <div className={"reset-modal"}>
        <h4 className={"reset-title"}>{title[language]}</h4>
        {status == "success" ? null : <InputField
          username={usernameValue}
          placeholder={username[language]}
          action={(event)=>this.reportChange(event, "resetUsername")}/>}
        <button
          onClick={()=>this.close()}
          className={"maxoft-button reset-button"}>
          <i className="material-icons icon-align md-12">keyboard_arrow_left</i>
          {cancel[language]}
        </button>
        {status == "success" ? null : <button
          onClick={()=>this.requestReset(usernameValue)}
          className={"maxoft-button reset-button"}>
          <i className={"material-icons icon-align md-12"}>autorenew</i>
          {reset[language]}
        </button>}
        <p>{status == "start" ? info[language] : status == "success" ? success[language] : failure[language]}</p>
      </div>
    )
  }
}

export default ForgottenModal

const InputField = (props) => (
  <div className={"reset-input"}>
    <input
      value={props.username}
      placeholder={props.placeholder}
      onChange={props.action}/>
  </div>
)
