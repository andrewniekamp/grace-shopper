import React from "react";
import { connect } from "react-redux";


/*COMPONENT*/
export const CartContainer = (props) =>{








}



/* CONTAINER */
const mapState = (state) =>{
  return {
    productList: state.cart
  }
}

export default connect(mapState)(CartContainer)


/* PROP TYPES */
