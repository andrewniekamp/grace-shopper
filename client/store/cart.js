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
    payload: {
      productId
    }
  }
}

export function removeFromCart(productId){
  return {
    type: REMOVE_ITEM,
    payload: {
      productId
    }
  }
}

/*
Thunk Creators
*/
const handleCartAdd = function(state, payload) {
  return {
    ...state,
    orderList: [...state.orderList, payload.productId]
  };
};

const handleCartRemove = function(state, payload) {
  return {
    ...state,
    items: state.items.filter(id => id !== payload.productId)
  };
};


export default function cart(state = initialState, action = {}){
  switch (action.type){
    case ADD_ITEM:
     return handleCartAdd(state, action.payload);
    case REMOVE_ITEM:
      return handleCartRemove(state, action.payload)
    default:
      return state;
  }
}












/*
Reducer
*/


