import React from 'react'
import {connect} from 'react-redux'
import { addToCart } from '../store'

export const singleProduct = (props) => {
  const {handleAddToCart} = props
  let inventory = props.productList
  let id = props.match.params.id
  let singleItem = inventory.filter(item => item.id == id)[0]

  return (<div className="container">
      <div className="row">
        <h1> {singleItem.name}</h1>
        <div className="col-md-6">
          <div className="thumbnail">
            <img src={singleItem.imageURL} className="img-responsive" />
          </div>
        </div>
        <div className="col-md-6 description">
          <p> {singleItem.description}</p>
          <p> {singleItem.price}</p>
          <button className="btn btn-success" onClick={handleAddToCart} value={singleItem.id}>
            Add to cart
          </button>
        </div>
      </div>
    </div>);
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
