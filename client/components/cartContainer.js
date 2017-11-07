import React from "react";
import { connect } from "react-redux";
import { removeFromCartThunk } from "../store";

/*COMPONENT*/
export const CartContainer = props => {
  const { cart, productList, handleRemoveFromCart, userId } = props;
  let bottles;
  if (cart && cart.products) {
    bottles = cart.products.map(cartItem =>
      productList.filter(product => product.id === Number(cartItem.id))
    );
  }
  let total = 0;
  return (
    <div className="container">
      <h2>Order Summary</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bottles &&
            bottles.map(bottle => {
              total += bottle[0].price;
              return (
                <tr key={bottle[0].id}>
                  <td>{bottle[0].name}</td>
                  <td>{bottle[0].price / 100}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={event => handleRemoveFromCart(userId, event)}
                      value={bottle[0].id}
                    >
                      Remove from cart
                    </button>
                    {/*<button
                      className="btn btn-success"
                      onClick={handleSubmitOrder} // not defined yet
                      value={bottle[0].id}
                    >
                      Remove from cart
                    </button>*/}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      <div>Total:$ {total / 100} </div>
    </div>
  );
};

/* CONTAINER */
const mapState = state => {
  return {
    cart: state.cart,
    productList: state.products,
    userId: state.user.id
  };
};

const mapDispatch = function(dispatch) {
  return {
    handleRemoveFromCart(userId, event) {
      let productId = Number(event.target.value);
      dispatch(removeFromCartThunk(userId, productId));
    }
  };
};

export default connect(mapState, mapDispatch)(CartContainer);

/* PROP TYPES */
