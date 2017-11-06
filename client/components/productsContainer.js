import React from "react";
import { connect } from "react-redux";
import { addToCartThunk, removeFromCart } from "../store";
import { NavLink } from "react-router-dom";

/*COMPONENT*/
export const ProductList = props => {
  const { productList, handleAddToCart, handleRemoveFromCart, userId } = props;

  return (
    <div className="container">
      <div className="row">
        <h1> Welcome </h1>
        {productList.map(product => {
          return (
            <div key={product.id} className="col-md-2 uniform">
              <div className="thumbnail">
                <NavLink to={`products/${product.id}`}>
                  <img
                    value={product.id}
                    src={product.imageURL}
                    className="img-thumbnail img-responsive"
                  />
                </NavLink>
                <div className="caption">
                  <h3>{product.name}</h3>
                  <p> ... </p>
                  <p>
                    <button
                      className="btn btn-success"
                      onClick={event => handleAddToCart(userId, event)}
                      value={product.id}
                    >
                      Add to cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* CONTAINER */
const mapState = state => {
  return {
    productList: state.products,
    userId: state.user.id
  };
};

const mapDispatch = function(dispatch) {
  return {
    handleAddToCart(userId, event) {
      console.log("we here !");
      let productId = event.target.value;
      dispatch(addToCartThunk(userId, productId));
    },
    handleRemoveFromCart(event) {
      let productId = event.target.value;
      dispatch(removeFromCart(productId));
    }
  };
};
export default connect(mapState, mapDispatch)(ProductList);

/* PROP TYPES */
