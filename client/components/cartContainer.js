import React from "react";
import { connect } from "react-redux";


/*COMPONENT*/
export const CartContainer = (props) =>{
  const {cartList, productList} = props
  console.log('!!!!! productList is: ', productList)
  console.log('cartList', cartList)
  let bottles = cartList.map(id =>  
    productList.filter(cartItem => (cartItem.id === Number(id))
    ))
  return (
    <div>
      <h2>Hi from Jose</h2>
  <table>
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

export default connect(mapState)(CartContainer)


/* PROP TYPES */
