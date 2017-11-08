import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'
import cart from './cart'
import reviews from './reviews'
import addProduct from './addProduct'
import orderList from './orderList'


const reducer = combineReducers({user, products, cart, reviews, addProduct, orderList})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './cart'
export * from './reviews'
export * from './addProduct'
export * from './orderList'
