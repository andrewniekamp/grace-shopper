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
    {console.log('our cart items: ', bottles)}
   { 
      bottles && bottles.map(bottle => {
        console.log("1")
        return (
        <div key={bottle[0].id}> 
          <div>
           {bottle[0].name} 
          </div>
        </div>)
      })
    }

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
