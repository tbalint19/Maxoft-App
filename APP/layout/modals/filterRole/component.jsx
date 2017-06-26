import React from 'react'
import Modal from 'maxoftModal'

class FilterRole extends Modal {
  content(props){
    return (
      <div>
        <Filter filter={"admin"}/>
        <Filter filter={"boss"}/>
        <Filter filter={"whatever"}/>
      </div>
    )
  }
}

export default FilterRole

const Filter = (props) => (
  <div>
    <input type={"checkbox"}/><span>{props.filter}</span>
  </div>
)
