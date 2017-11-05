import axios from "axios";

//action types

const GET_REVIEWS = 'GET_REVIEWS';

// action creator

export function getReviews(reviews) {
  return {
    type: GET_REVIEWS, reviews
  }
}

//helper
function fetchAllReviews(dispatch){
  return axios
    .get('/api/reviews') //!!! CREATE THE API FOR REVIEWS !!!
    .then(res => {
      return dispatch(getReviews(res.data))
    })
    .catch(err => console.log(err))
}

export function fetchReviews(){
  return function thunk(dispatch){
    return fetchAllReviews(dispatch)
  }
}

//reducer
export default function Reviews(reviews = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    default:
      return reviews;
    }
}
