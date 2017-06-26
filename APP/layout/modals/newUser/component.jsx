import React from 'react'
import Modal from 'maxoftModal'

class NewUser extends Modal {
  reportChange(event, field){
    this.dispatch({type: "INPUT_FIELD_CHANGED", value: event.target.value, field: field})
  }
  addUser(tsz, email, username, password, passwordAgain){
    if (password != passwordAgain) { this.dispatch({type: "NOT_MATCHING_PASSWORD"}) } else {
      let data = {tsz, email, username, password}
      let action = {type: "ADD_RESPONSE_ARRIVED"}
      let request = {method: "POST", destination: 'adduser', data: data, action: action}
      this.JSONtransfer(request)
      this.dispatch({type: "REQUEST_MADE", request: "newUser"})
    }
  }
  content(props){
    let tsz = props.state.newUser.tsz
    let email = props.state.newUser.email
    let username = props.state.newUser.username
    let password = props.state.newUser.password
    let passwordAgain = props.state.newUser.passwordAgain
    let l = this.props.state.language
    let TITLE = {eng: "Add a new user", hun: "Új felhasználó hozzáadása"}
    let TSZ = {eng: "Id", hun: "Tsz"}
    let EMAIL = {eng: "Email address", hun: "Email cím"}
    let USERNAME = {eng: "Username", hun: "Felhasználónév"}
    let PASSWORD = {eng: "Password", hun: "Jelszó"}
    let PASSWORDAGAIN = {eng: "Password again", hun: "Jelszó még egyszer"}
    let BACK = {eng: "Back", hun: "Vissza"}
    let ADD = {eng: "Add", hun: "Hozzáadás"}
    return(
      <div>
        <h2 className={"add-new-title"}>{TITLE[l]}</h2>
        <InputField placeholder={TSZ[l]} action={(event)=>this.reportChange(event, "newTsz")}/>
        <InputField placeholder={EMAIL[l]} action={(event)=>this.reportChange(event, "newEmail")}/>
        <InputField placeholder={USERNAME[l]} action={(event)=>this.reportChange(event, "newUsername")}/>
        <InputField placeholder={PASSWORD[l]} action={(event)=>this.reportChange(event, "newPassword")}/>
        <InputField placeholder={PASSWORDAGAIN[l]} action={(event)=>this.reportChange(event, "newPasswordAgain")}/>
        <button
          onClick={()=>this.addUser(tsz, email, username, password, passwordAgain)}
          className={"maxoft-button add-new-button"}>
          <i className="material-icons icon-align md-12">person_add</i>
          {ADD[l]}
        </button>
        <button
          onClick={()=>this.close()}
          className={"maxoft-button add-new-button"}>
          <i className="material-icons icon-align md-12">chevron_left</i>
          {BACK[l]}
        </button>
      </div>
    )
  }
}

export default NewUser

const InputField = (props) => (
  <div>
    <input
      className={"add-new-input"}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.action}/>
  </div>
)
