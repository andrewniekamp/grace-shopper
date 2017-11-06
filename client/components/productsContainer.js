import React from 'react'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../store'
import {NavLink} from 'react-router-dom'


/*COMPONENT*/
export const ProductList = (props) => {
  const {productList, handleAddToCart, handleRemoveFromCart} = props

  return (
    <div className="container">
    <div className="row">
    <h1> Welcome </h1>
    {productList.map(product => {
      return (
        <div key={product.id} className="col-md-2 uniform">

            <div className="thumbnail">
            <NavLink to={`products/${product.id}`}><img value={product.id} src={product.imageURL} className="img-thumbnail img-responsive" width="200" height="auto"/> </NavLink>
            <div className="caption">
            <h3>{product.name}</h3><p> ... </p>
            <p><button className="btn btn-success" onClick={handleAddToCart} value={product.id}>Add to cart</button></p>
          </div>
        </div>
        </div>
        )
    })}
    </div>
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

{/* <p><button className="btn btn-danger" onClick={handleRemoveFromCart} value={product.id}>Remove from cart</button></p> */}