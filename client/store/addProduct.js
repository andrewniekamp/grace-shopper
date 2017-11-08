import axios from 'axios';

/*
ACTION TYPES
*/

const ADD_NAME = 'ADD_NAME'
const ADD_PRICE = 'ADD_PRICE';
const ADD_DESCRIPTION = 'ADD_DESCRIPTION'
const ADD_IMAGEURL = 'ADD_IMAGEURL'
const ADD_QUANTITY = 'ADD_QUANTITY'
const ADD_CATEGORY = 'ADD_CATEGORY'

const ADD_PRODUCT = 'ADD_PRODUCT';
/*
INITIAL STATE
*/

const productToAdd = {
  name: '',
  price: 0,
  description: '',
  imageURL: '',
  quantity: 0,
  category: null
};

/*
ACTION CREATORS
*/
export const addName = name =>({type: ADD_NAME, name})
export const addPrice = price => ({type: ADD_PRICE, price})
export const addDescription = description => ({type: ADD_DESCRIPTION, description})
export const addImageURL = imageURL => ({type: ADD_IMAGEURL, imageURL})
export const addQuantity = quantity =>({type: ADD_QUANTITY, quantity})
export const addCategory = category =>({type: ADD_CATEGORY, category})

export const addProduct = product => ({ type: ADD_PRODUCT, product });

/*
THUNK CREATORS
*/

export const handleAddProduct = (productToAdd) => dispatch =>
  axios
    .post('/api/products', productToAdd )
    .then(res => dispatch(addProduct(res.data)))
    .catch(err => console.log(err));
/*
REDUCER
*/

export default function(state = productToAdd, action) {
  switch (action.type) {
    case ADD_NAME:
      return Object.assign({}, state, {name : action.name})
    case ADD_PRICE:
      return Object.assign({}, state, {price : action.price})
    case ADD_DESCRIPTION:
      return Object.assign({}, state, {description : action.description})
    case ADD_IMAGEURL:
      return Object.assign({}, state, {imageURL : action.imageURL})
    case ADD_QUANTITY:
      return Object.assign({}, state, {quantity : action.quantity})
    case ADD_CATEGORY:
      return Object.assign({}, state, {category : action.category})
    case ADD_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

