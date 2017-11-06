import axios from "axios";


/*
Action Types
*/
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'


/*
Initial State
*/
const initialState = {
  orderList: []
}

/*
Action Creator
*/
export function addToCart(productId){
  return {
    type: ADD_ITEM,
    payload: productId
  }
}

export function removeFromCart(productId){
  return {
    type: REMOVE_ITEM,
    payload: productId
  }
}


//Thunk
export const addToCartThunk = (userId, productId) => dispatch =>
  axios
    .put(`/api/users/${userId}/cart/add`, { productId })
    .then(res => {
      dispatch(addToCart(productId));
    })
    .catch(error => dispatch(addToCart({ error })));


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
export default function cart(state = [], action = {}){
  switch (action.type){
    case ADD_ITEM:
     return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter(thing => thing !== action.payload)
    default:
      return state;
  }
}
