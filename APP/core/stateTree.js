const stateTree = {

  state: {
    language: "hun",
    app: 'login',
    modal: null,
    inTransition: false,
    pendingResponses: [],
    selectedRoles: [],
    selectedUser: null,
    login: {
      username: "",
      password: "",
      status: "start"
    },
    reset: {
      username: "",
      status: "start"
    },
    newUser: {
      tsz: "",
      email: "",
      username: "",
      password: "",
      passwordAgain: ""
    },
    searchParams: {
      username: "",
      id: "",
      firmID: "",
      name: "",
      birthDate: ""
    },
    reFetchNeeded: true
  },

  data: {
    user: {
      id: null,
      username: "",
      email: ""
    },
    firm: {
      id: null,
      name: ""
    },
    users: []
  }

}

export default stateTree
