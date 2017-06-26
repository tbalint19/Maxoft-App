import React from 'react'
import Container from 'container'

class Footer extends Container {
  changeLanguage(event){
    let language = event.target.id
    this.dispatch({type: "LANGUAGE_CHANGED", language: language})
  }
  render(){
    let language = this.props.state.language
    let support = {eng: "Support", hun: "Támogatás"}
    let portal = {eng: "Customerportal", hun: "Ügyfélkapu"}
    return (
      <div className={"footer"}>
        <div className={"footer-placeholder"}></div>
        <div className={"footer-controller"}>
          <div>
            MaXoft Kft - {portal[language]}
          </div>
          <div>
            {support[language]}: +36 (1) 218 7091, maxoft@maxoft.hu
          </div>
          <div>
            <button id="hun" onClick={(event)=>this.changeLanguage(event)}></button>
            <button id="eng" onClick={(event)=>this.changeLanguage(event)}></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
