import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from '../store'


/*COMPONENT*/
export const CartContainer = (props) =>{
  const {cartList, productList, handleRemoveFromCart} = props
  console.log('!!!!! productList is: ', productList)
  console.log('cartList', cartList)
  let bottles = cartList.map(id =>
    productList.filter(cartItem => (cartItem.id === Number(id))
    ))
  return (
    <div className="container">
      <h2>Hi from Jose</h2>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
      </tr>
      </thead>
    <tbody>
    {
      bottles && bottles.map(bottle => {

        console.log("our bottle", bottle)
        return (
        <tr key={bottle[0].id}>
          <td>
           {bottle[0].name}
          </td>
          <td>
           {bottle[0].price}
          </td>  
          <td>
          <button className="btn btn-danger" onClick={handleRemoveFromCart} value={bottle[0].id}>Remove from cart</button>        
          </td>

        </tr>
        )
      })
    }
      </tbody>
    </table>
    </div>
  )
}


/* CONTAINER */
const mapState = (state) =>{
  return {
    cartList: state.cart,
    productList: state.products
  }
}

const mapDispatch = function(dispatch){
  return{
    handleRemoveFromCart(event){
      dispatch(removeFromCart(event.target.value))
    }
  }
}

export default connect(mapState, mapDispatch)(CartContainer)


/* PROP TYPES */
