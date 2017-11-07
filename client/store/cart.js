import axios from "axios"

/*
Action Types
*/
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const GET_CART = "GET_CART";
const EMPTY_CART = 'EMPTY_CART'

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
    productId
  };
}

//Thunk
export const addToCartThunk = (userId, productId) => dispatch =>
  axios
    .put(`/api/users/${userId}/cart/add`, { productId })
    .then(product => {
      dispatch(addToCart(product.data));
    })
    .catch(error => dispatch(addToCart({ error })));

export const removeFromCartThunk = (userId, productId) => dispatch =>
axios
  .put(`/api/users/${userId}/cart/destroy`, { productId })
  .then(product => {
    console.log("ID", product.data.id);
    dispatch(removeFromCart(product.data.id));
  })
  .catch(error => dispatch(removeFromCart({ error })));

export const getCartThunk = userId => dispatch =>
  axios
    .get(`/api/users/${userId}/cart/`)
    .then(theCart => {
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

export function emptyCart() {
  return {
    type: EMPTY_CART,
    payload: 0
  }
}

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
      tempState = Object.assign({}, state, );
      tempState.products = tempState.products.filter( product => product.id !== action.productId);
      return tempState;
      // return [ ...state.slice(0, state.indexOf(action.productId),
      //   ...state.slice(state.indexOf(action.productId) + 1))]
    case GET_CART:
      return action.payload;
    case EMPTY_CART:
      return state.filter(thing => thing == action.payload)
    default:
      return state;
  }
}
