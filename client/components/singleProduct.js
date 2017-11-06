import React from 'react'
import {connect} from 'react-redux'

export const singleProduct = (props) => {
  let inventory = props.productList
  let id = props.match.params.id
  let singleItem = inventory.filter(item => item.id == id)[0]

  return (
    <div>
    <h1> Hai from Jose</h1>
    {console.log(singleItem)}
    <h3> {singleItem.name}</h3>
    <img src={singleItem.imageURL}/>
    <p> {singleItem.description}</p>
    <p> {singleItem.price / 100}</p>
    </div>
  )
}

const mapState = (state) => {
  return {
    productList: state.products
  }
}

export default connect(mapState)(singleProduct)
