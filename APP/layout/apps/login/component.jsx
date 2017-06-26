import React from 'react'
import Container from 'container'

class Login extends Container {
  requestForgotten(){
    this.dispatch({type: "MODAL_OPENED", modal: "forgottenModal"})
  }
  reportChange(event, field){
    this.dispatch({type: "INPUT_FIELD_CHANGED", value: event.target.value, field: field})
  }
  requestLogin(usernameValue, passwordValue){
    let data = {username: usernameValue, password: passwordValue}
    let action = {type: "LOGIN_RESPONSE_ARRIVED"}
    let request = {method: "POST", destination: 'login', data: data, action: action}
    this.JSONtransfer(request)
    this.dispatch({type: "REQUEST_MADE", request: "login"})
  }
  render(){
    let language = this.props.state.language
    let usernameValue = this.props.state.login.username
    let passwordValue = this.props.state.login.password
    let status = this.props.state.login.status
    let forgotten = {eng: "Forgotten password?", hun: "Elfelejtett jelszó?"}
    let login = {eng: "Login", hun: "Bejelentkezés"}
    let username = {eng: "Username", hun: "Felhasználónév"}
    let password = {eng: "Password", hun: "Jelszó"}
    let error = {eng: "Invalid credentials", hun: "Hibás adatok"}
    return (
      <div className={"login"}>
        <LoginLogo/>
        <ErrorPlaceholder status={status} text={error[language]}/>
        <LoginInput
          type={"text"}
          value={usernameValue}
          placeholder={username[language]}
          action={(event)=>this.reportChange(event, "loginUsername")}/>
        <LoginInput
          type={"password"}
          value={passwordValue}
          placeholder={password[language]}
          action={(event)=>this.reportChange(event, "loginPassword")}/>
        <div className={"forgotten"}>
          <button className={"link-button"} onClick={()=>this.requestForgotten()}>{forgotten[language]}</button>
        </div>
        <div className={"login-button"}>
          <button className={"maxoft-button"} onClick={()=>this.requestLogin(usernameValue, passwordValue)}>
            <i className="material-icons md-12 icon-align">vpn_key</i>
            {login[language]}
          </button>
        </div>
      </div>
    )
  }

}

export default Login

const LoginLogo = (props) => (
  <div className={"login-logo"}>
    <h2>(MaXoft Logo)</h2>
  </div>
)

const LoginInput = (props) => (
  <div className={"login-input"}>
    <input placeholder={props.placeholder} onChange={props.action} value={props.value} type={props.type}/>
  </div>
)

const ErrorPlaceholder = (props) => (
  <div className={"login-error"}>
    {props.status == "error" ? <p>{props.text}</p> : null}
  </div>
)
