import React from 'react'
import Container from 'container'

class NavBar extends Container {
  requestLogout(){
    this.dispatch({type: "LOGOUT"})
  }
  getHome(){
    this.dispatch({type: "APP_REQUESTED", app: "mainController"})
  }
  render(){
    let app = this.props.state.app
    let language = this.props.state.language
    let portal = {eng: "Customerportal", hun: "Ügyfélkapu"}
    let help = {eng: "Help", hun: "Súgó"}
    let home = {eng: "Home", hun: "Főoldal"}
    let logout = {eng: "Logout", hun: "Kijelentkezés"}
    let welcome = {eng: "Welcome ", hun: "Üdvözöllek "}
    let user = this.props.data.user
    let firm = this.props.data.firm
    return (
      <div className={"navbar"}>
        <div className={"navbar-controller"}>
          <div className={"navbar-text"}>
            Wizuál Bér {portal[language]}
            {app != "login" ? (" - " + firm.name) : ""}
          </div>
          <div className={"navbar-welcome"}>
            {app == "mainController" ? (welcome[language] + user.username) + "!" : ""}
          </div>
          <div className={"navbar-buttons"}>
            <button className={"navbar-button"}>
              <i className="material-icons md-12 icon-align">help_outline</i>
              {help[language]}
            </button>
            {(app != "login" && app != "mainController") && <button className={"navbar-button"} onClick={()=>this.getHome()}>
              <i className="material-icons md-12 icon-align">account_balance</i>
              {home[language]}
            </button>}
            {app == "mainController" && <button className={"navbar-button"} onClick={()=>this.requestLogout()}>
              <i className="material-icons md-12 icon-align">power_settings_new</i>
              {logout[language]}
            </button>}
          </div>
        </div>
        <div className={"navbar-placeholder"}></div>
      </div>
    )
  }
}

export default NavBar
