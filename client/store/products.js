import axios from 'axios';

/*
ACTION TYPES
*/

const GET_PRODUCTS = 'GET_PRODUCTS';


/*
INITIAL STATE
*/

const productList = [];

/*
ACTION CREATORS
*/

const getProducts = products => ({ type: GET_PRODUCTS, products });

/*
THUNK CREATORS
*/

export const products = () => dispatch =>
  axios
    .get('/api/products')
    .then(res => dispatch(getProducts(res.data)))
    .catch(err => console.log(err));
/*
REDUCER
*/

export default function(state = productList, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
