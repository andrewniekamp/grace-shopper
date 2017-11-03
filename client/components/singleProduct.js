import React from 'react'
import {connect} from 'react-redux'
import { addToCart } from '../store'

export const singleProduct = (props) => {
  const {handleAddToCart} = props
  let inventory = props.productList
  let id = props.match.params.id
  let singleItem = inventory.filter(item => item.id == id)[0]

  return (
    <div>
      <h1> Hai from Jose</h1>
      {console.log(singleItem)}
      <h3> {singleItem.name}</h3>
      <img src={singleItem.imageURL} />
      <p> {singleItem.description}</p>
      <p> {singleItem.price}</p>
      <p>
        <button className="btn btn-success" onClick={handleAddToCart} value={singleItem.id}>Add to cart</button>
      </p>
    </div>
  )
}

const mapState = (state) => {
  return {
    productList: state.products
  }
}

const mapDispatch = function(dispatch){
  return {
  handleAddToCart(event){
    console.log('!!! item added to cart', event.target.value)

    dispatch(addToCart(event.target.value))
    }
  }
}

export default connect(mapState, mapDispatch)(singleProduct)
