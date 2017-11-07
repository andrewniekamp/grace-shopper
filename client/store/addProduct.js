import axios from 'axios';

/*
ACTION TYPES
*/

const ADD_PRODUCT = 'ADD_PRODUCT';

/*
INITIAL STATE
*/

const productToAdd = {};

/*
ACTION CREATORS
*/

const addProduct = product => ({ type: ADD_PRODUCT, product });

/*
THUNK CREATORS
*/

export const handleAddProduct = () => dispatch =>
  axios
    .post('/api/products')
    .then(res => dispatch(getProducts(res.data)))
    .catch(err => console.log(err));
/*
REDUCER
*/

export default function(state = productToAdd, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
