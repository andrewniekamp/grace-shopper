import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store, { products, reviews } from './store'
import Routes from './routes'
import './index.scss'


// establishes socket connection
import './socket'
const productThunk = products();
productThunk(store.dispatch)
const reviewsThunk = reviews();
reviewsThunk(store.dispatch);
// .then( () =>{
//   console.log('!!!!!!', store.getState())
// })

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
