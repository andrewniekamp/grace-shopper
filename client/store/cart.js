import axios from "axios";

/*
Action Types
*/
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const GET_CART = "GET_CART";

/*
Initial State
*/
const initialState = {
  products: [],
  status: 'Initial'
};

/*
Action Creator
*/
export function addToCart(product) {
  return {
    type: ADD_ITEM,
    product
  };
}

export function getCart(theCart) {
  return {
    type: GET_CART,
    payload: theCart
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_ITEM,
    payload: productId
  };
}

//Thunk
export const addToCartThunk = (userId, productId) => dispatch =>
  axios
    .put(`/api/users/${userId}/cart/add`, { productId })
    .then(product => {
      // console.log(product.data);
      dispatch(addToCart(product.data));
    })
    .catch(error => dispatch(addToCart({ error })));

export const getCartThunk = userId => dispatch =>
  axios
    .get(`/api/users/${userId}/cart/`)
    .then(theCart => {
      // console.log(theCart.data)
      dispatch(getCart(theCart.data[0]));
    })
    .catch(error => dispatch(getCart({ error })));

// here goes submit order thunk
//   export const addToCartThunk = (userId, productId, orderId) => dispatch =>
// axios
//   .post(`/api/users/${userId}/cart/add`, { productId, orderId })
//   .then(res => {
//     dispatch(getUser(res.data));
//     history.push("/home");
//   })
//   .catch(error => dispatch(getUser({ error })));

/*
Reducer
*/
export default function cart(state = initialState, action = {}) {
  let tempState;
  switch (action.type) {
    case ADD_ITEM:
      tempState = Object.assign({}, state);
      tempState.products.push(action.product);
      return tempState;
    case REMOVE_ITEM:
      return state.filter(thing => thing !== action.payload);
    case GET_CART:
      return action.payload;
    default:
      return state;
  }
}
