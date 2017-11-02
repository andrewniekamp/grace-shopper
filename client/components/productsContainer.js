import React from 'react'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../store'



/*COMPONENT*/
export const ProductList = (props) => {
  const {productList, handleAddToCart, handleRemoveFromCart} = props

  return (
    <div>
    <h1> Welcome </h1>
    {productList.map(product => {
      return (
        <div key={product.id}>
          <div>{product.name}</div>
          <img src={product.imageURL}/>
          <button 
          onClick={handleAddToCart}
          value={product.id}>
          Add to Cart 
          </button>
          <button onClick={handleRemoveFromCart}
          value={product.id}> 
          Remove from Cart 
          </button>
        </div>
        )
    })}
    </div>
  )
}

/* CONTAINER */
const mapState = (state) => {
  return {
    productList: state.products
  }
}

const mapDispatch = function(dispatch){
  return {
    handleAddToCart(event){
      console.log('!!!!!', event.target.value)
      
      dispatch(addToCart(event.target.value))
    },
    handleRemoveFromCart(event){
      dispatch(removeFromCart(event.target.value))
    }
  }
}
export default connect(mapState, mapDispatch)(ProductList)


/* PROP TYPES */

