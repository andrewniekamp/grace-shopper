import React from 'react'
import { connect } from 'react-redux'

export const singleProduct = (props) => {
  let inventory = props.productList
  let id = props.match.params.id
  let singleItem = inventory.filter(item => item.id == id)
  return (
    <div className="container-fluid" >
      {console.log(singleItem)}
      <h2> {singleItem.length && singleItem[0].name}</h2>
      <div className="uniform-single-product-view">
          <img className="uniform-single-image" src={singleItem.length && singleItem[0].imageURL} />
        <div className = "uniform-single-product-view-script">
        <div>
        <h3>Description</h3>
          <p> {singleItem.length && singleItem[0].description}</p>
          </div>
          <div>
          <h4>Price</h4>
          <p> {singleItem.length && singleItem[0].price / 100}</p>
          <button className="btn btn-success" value={singleItem.id}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    productList: state.products
  }
}

export default connect(mapState)(singleProduct)
