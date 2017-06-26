import React from 'react'
import Container from 'container'

class MainController extends Container {
  getUsers(){
    this.dispatch({type: "APP_REQUESTED", app: "users"})
  }
  componentWillMount(){
    let action1 = {type: "USER_DATA_ARRIVED"}
    let action2 = {type: "FIRM_DATA_ARRIVED"}
    let requestUser = {method: "GET", destination: 'getUser', action: action1}
    let requestFirm = {method: "GET", destination: 'getFirm', action: action2}
    this.JSONtransfer(requestUser)
    this.JSONtransfer(requestFirm)
  }
  render() {
    let language = this.props.state.language
    let masterData = {eng: "Master-data", hun: "Törzsadatok"}
    let selfService = {eng: "Self-service", hun: "Önkiszolgáló"}
    let ePayroll = {eng: "e-Payroll", hun: "e-Bérjegyzék"}
    let eCafeteria = {eng: "e-Cafeteria", hun: "e-Cafeteria"}
    let users = {eng: "Users", hun: "Felhasználók"}
    let settings = {eng: "Settings", hun: "Beállítások"}
    let select = {eng: "Select", hun: "Választ"}
    return (
      <div className={"main-controller"}>
        <OptionsLogo/>
        <div className={"options"}>
          <Option name={masterData[language]} select={select[language]} icon={"contacts"}/>
          <Option name={selfService[language]} select={select[language]} icon={"shopping_cart"}/>
          <Option name={ePayroll[language]} select={select[language]} icon={"credit_card"}/>
          <Option name={eCafeteria[language]} select={select[language]} icon={"card_giftcard"}/>
        </div>
        <div className={"controller"}>
          <ControllerButton name={users[language]} icon={"group_add"} action={()=>this.getUsers()}/>
          <ControllerButton name={settings[language]} icon={"build"} action={()=>{console.log("settings")}}/>
        </div>
      </div>
    )
  }
}

export default MainController

const OptionsLogo = (props) => (
  <div className={"options-logo"}>
    <h2>(MaXoft Logo)</h2>
  </div>
)

const Option = (props) => (
  <div className={"option"}>
    <div className={"icon-place"}>
      <i className="material-icons md-42">{props.icon}</i>
    </div>
    <div className={"controll-place"}>
      <p>{props.name}</p>
      <button className={"maxoft-button"}>{props.select}</button>
    </div>
  </div>
)

const ControllerButton = (props) => (
  <div>
    <button className={"maxoft-button controller-button"} onClick={props.action}>
      <i className="material-icons md-12 icon-align icon-with-space">{props.icon}</i>
      {props.name}
    </button>
  </div>
)
