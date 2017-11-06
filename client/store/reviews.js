import axios from "axios";

//action types

const GET_REVIEWS = 'GET_REVIEWS';

//initial state

const allReviews = [];

// action creator

const getReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
})

//Thunk creators

export const reviews = () => dispatch =>
  axios
    .get('/api/reviews')
    .then(res => dispatch(getReviews(res.data)))
    .catch(err => console.log(err))

//reducer
export default function(state = allReviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}
