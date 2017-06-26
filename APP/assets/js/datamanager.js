const Cookies = require('./cookies')

const createApiController = (controller) => {

  const URL = "/api/"
  const csrftoken = Cookies.get('csrftoken')

  const JSONtransfer = (req) => {
    const request = new XMLHttpRequest()
    request.open(req.method, URL + req.destination, true)
    request.setRequestHeader("auth-token", localStorage["auth-token"])
    if (req.method == "POST") {
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    }
    request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let action = req.action
        action.data = JSON.parse(this.responseText)
        controller.dispatch(action)
      }
    }
    if (req.method == "POST") {
      request.send(JSON.stringify(req.data))
    }
    if (req.method == "GET") {
      request.send()
    }
  }

  return JSONtransfer

}

export default createApiController
