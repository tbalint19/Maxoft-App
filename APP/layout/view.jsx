import React from 'react'

import ViewDependencies from 'viewDependencies'

import NavBar from './const/navbar/component'
import Footer from './const/footer/component'

import Login from './apps/login/component'
import MainController from './apps/mainController/component'
import Users from './apps/users/component'

import NewUser from './modals/newUser/component'
import EditUser from './modals/editUser/component'
import EditRole from './modals/editRole/component'
import FilterRole from './modals/filterRole/component'
import ForgottenModal from './modals/forgotten/component'

class View extends React.Component{
  render(){
    let controller = this.props.controller
    let data = this.props.model.data
    let state = this.props.model.state
    return(
      <div className="app">
        <ViewDependencies/>


        <NavBar data={data} state={state} controller={controller}/>
        {/* Apps */}
        {state.app == "login" && <Login data={data} state={state} controller={controller}/>}
        {state.app == "mainController" && <MainController data={data} state={state} controller={controller}/>}
        {state.app == "users" && <Users data={data} state={state} controller={controller}/>}
        <Footer data={data} state={state} controller={controller}/>


        {/* Modal */}
        {state.modal == "newUser" && <NewUser data={data} state={state} controller={controller}/>}
        {state.modal == "editUser" && <EditUser data={data} state={state} controller={controller}/>}
        {state.modal == "editRole" && <EditRole data={data} state={state} controller={controller}/>}
        {state.modal == "filterRole" && <FilterRole data={data} state={state} controller={controller}/>}
        {state.modal == "forgottenModal" && <ForgottenModal data={data} state={state} controller={controller}/>}


      </div>
    )
  }
}

export default View
