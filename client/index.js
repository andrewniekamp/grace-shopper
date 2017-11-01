import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store, { products } from './store'
import Routes from './routes'

// establishes socket connection
import './socket'
const productThunk = products();
productThunk(store.dispatch)
  .then(products => console.log('deez nutz', products))
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
