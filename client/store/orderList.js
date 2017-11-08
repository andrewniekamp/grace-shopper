import axios from 'axios';

/*
ACTION TYPES
*/

const GET_ORDERS = 'GET_ORDERS';


/*
INITIAL STATE
*/

const orderList = [];

/*
ACTION CREATORS
*/

const getOrders = orders => ({ type: GET_ORDERS, orders });

/*
THUNK CREATORS
*/

export const ordersThunk = (id) => dispatch =>
  axios
    .get(`/api/users/${id}/order/`)
    .then(res => dispatch(getOrders(res.data)))
    .catch(err => console.log(err));
/*
REDUCER
*/

export default function(state = orderList, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
