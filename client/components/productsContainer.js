import React from 'react'
import {connect} from 'react-redux'

/*COMPONENT*/
export const ProductList = (props) => {
  const {productList} = props
  return (
    <div>
    <h1> Welcome </h1>
    {productList.map(product => {
      return (
        <div key={product.id}>
          <div>{product.name}</div>
          <img src={product.imageURL}/>
        </div>)
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

export default connect(mapState)(ProductList)

/* PROP TYPES */

