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


const handleCartAdd = function(state, payload) {
  return {
    orderList: [...state.orderList, payload.productId]
  };
};

const handleCartRemove = function(state, payload) {
  return {
    orderList: state.items.filter(id => id !== payload.productId)
  };
};

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
