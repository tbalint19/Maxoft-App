import React from 'react'
import Container from 'container'
import {usersDictionary} from './dictionary'

class Users extends Container {
  constructor(props){
    super(props);
    this.d = usersDictionary
  }
  componentWillMount(){
    let action = {type: "USERS_ARRIVED"}
    let url = "getUsers?nameParam=NOPARAM&usernameParam=NOPARAM&idParam=NOPARAM&firmIdParam=NOPARAM&birthDateParam=NOPARAM"
    let requestUsers = {method: "GET", destination: url, action: action}
    this.JSONtransfer(requestUsers)
  }
  componentWillReceiveProps(props){
    if (props.state.reFetchNeeded) {
      let action = {type: "USERS_ARRIVED"}
      let url = this.buildUrl(props.state.searchParams)
      let requestUsers = {method: "GET", destination: url, action: action}
      this.JSONtransfer(requestUsers)
    }
  }
  buildUrl(searchParams){
    let id = searchParams.id == "" ? "NOPARAM" : searchParams.id
    let firmID = searchParams.firmID == "" ? "NOPARAM" : searchParams.firmID
    let name = searchParams.name == "" ? "NOPARAM" : searchParams.name
    let birthDate = searchParams.birthDate == "" ? "NOPARAM" : searchParams.birthDate
    let username = searchParams.username == "" ? "NOPARAM" : searchParams.username
    return "getUsers?nameParam=" + name + "&usernameParam=" + username + "&idParam=" + id + "&firmIdParam=" + firmID + "&birthDateParam=" + birthDate
  }
  selectUser(uid){
    this.dispatch({type: "USER_SELECTED", id: uid})
  }
  reportChange(event, field){
    this.dispatch({type: "INPUT_FIELD_CHANGED", value: event.target.value, field: field})
  }
  addNewUser(){
    this.dispatch({type: "MODAL_OPENED", modal: "newUser"})
  }
  render() {
    console.log(this.props.data.users)
    let d = this.d
    let users = this.props.data.users
    let selectedRoles = this.props.state.selectedRoles
    let lan = this.props.state.language
    let params = this.props.state.searchParams
    return (
      <div className={"users"}>
        <div className={"users-header"}>
          <div className={"users-header-first-row"}>
            <UsersLogo title={d.logoTitle[lan]}/>
            <div className={"users-header-buttons"}>
              <FilterButton name={d.filterUser[lan]}/>
              <NewUserButton name={d.newUser[lan]} action={()=>this.addNewUser()}/>
            </div>
          </div>
          <div className={"users-header-second-row"}>
            <p className={"filter-info"}>Only "admin"</p>
          </div>
          <div className={"search-bars"}>
            <SearchField placeholder={"ID"} width={50} disabled={false} action={(e)=>this.reportChange(e, "searchID")} value={params.id}/>
            <SearchField placeholder={d.firm[lan] + " ID"} width={50} disabled={false} action={(e)=>this.reportChange(e, "searchFirm")} value={params.firmId}/>
            <SearchField placeholder={d.title[lan]} width={50} disabled={true} value={params.title}/>
            <SearchField placeholder={d.name[lan]} width={150} disabled={false} action={(e)=>this.reportChange(e, "searchName")} value={params.name}/>
            <SearchField placeholder={d.birth[lan]} width={100} disabled={false} action={(e)=>this.reportChange(e, "searchBirth")} value={params.birthDate}/>
            <SearchField placeholder={d.username[lan]} width={150} disabled={false} action={(e)=>this.reportChange(e, "searchUsername")} value={params.username}/>
            <SearchField placeholder={d.password[lan]} width={100} disabled={true} value={params.password}/>
            <SearchField placeholder={d.regDate[lan]} width={100} disabled={true} value={params.regDate}/>
          </div>
        </div>
        <div className={"user-list"}>
          {users.map((u) => (
            <User user={u} action={()=>this.selectUser(u.id)} key={u.id}/>
          ))}
        </div>
      </div>
    )
  }

}

export default Users

const UsersLogo = (props) => (
  <div className={"users-logo"}>
    <h3>(MaXoft Logo)&nbsp;-&nbsp;<span className={"users-title"}>{props.title}</span></h3>
  </div>
)

const FilterButton = (props) => (
  <div>
    <button className={"maxoft-button filter-button"}>
      <i className="material-icons icon-align md-12">reorder</i>
      {props.name}
    </button>
    <button className={"maxoft-button filter-delete-button"}>
      <i className="material-icons icon-align md-12">backspace</i>
    </button>
  </div>
)

const NewUserButton = (props) => (
  <div className={"new-user"}>
    <button className={"maxoft-button"} onClick={props.action}>
      <i className="material-icons icon-align md-12">person_add</i>
      {props.name}
    </button>
  </div>
)

const SearchField = (props) => (
  <div className={"search-field"}>
    <input
      onChange={props.action}
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={"search-bar-input"}
      style={{width: props.width}}/>
  </div>
)

const User = (props) => (
  <div className={"user-row"} onClick={props.action}>
    <div style={{width: "50px"}}>{props.user.id}</div>
    <div style={{width: "50px"}}>{props.user.firmId}</div>
    <div style={{width: "50px"}}>{props.user.title}</div>
    <div style={{width: "150px"}} id={"table-username"}>{props.user.name}</div>
    <div style={{width: "100px"}}>{props.user.birthDate}</div>
    <div style={{width: "150px"}}>{props.user.username}</div>
    <div style={{width: "100px"}}>{props.user.password}</div>
    <div style={{width: "100px"}}>{props.user.regDate}</div>
  </div>
)
