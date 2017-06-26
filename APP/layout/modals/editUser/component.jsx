import React from 'react'
import Modal from 'maxoftModal'

class EditUser extends Modal {
  content(props){
    let user = props.state.selectedUser
    return(
      <div>
        <h4>Edit user</h4>
        <p>{user.id}</p>
        <p>{user.username}</p>
        <p>{user.name}</p>
        <button onClick={()=>this.close()}>Back</button>
      </div>
    )
  }
}

export default EditUser
