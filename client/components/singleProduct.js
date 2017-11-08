import React from "react";
import { connect } from "react-redux";

export const singleProduct = props => {
  console.log('users on props:', props)
  let inventory = props.productList;
  let id = props.match.params.id;
  let singleItem = inventory.filter(item => item.id == id);
  const getReviewsForProduct = productId =>
    props.allReviews.filter(
      review => review.productId.toString() === productId
    );
  let productReviews = getReviewsForProduct(id);

export const singleProduct = (props) => {
  let inventory = props.productList
  let id = props.match.params.id
  let singleItem = inventory.filter(item => item.id == id)
  return (
    <div className="container-fluid">
      <h2> {singleItem.length && singleItem[0].name}</h2>
      <div className="uniform-single-product-view">
        <img
          className="uniform-single-image"
          src={singleItem.length && singleItem[0].imageURL}
        />
        <div className="uniform-single-product-view-script">
          <div>
            <h3>Description</h3>
            <p> {singleItem.length && singleItem[0].description}</p>
          </div>
          <div>
            <h4>Price</h4>
            <p> {singleItem.length && singleItem[0].price / 100}</p>
            <button className="btn btn-success" value={singleItem.id}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {productReviews &&
            productReviews.map(review => {
              return (
                <div className="col-md-12" key={review.id}>
                  <div className="col-md-2">
                    <h5>{review.user.email}</h5>
                    <p>
                      Added date:
                      <br />
                      {review.createdAt.slice(0, 10)}
                    </p>
                  </div>
                  <div className="col-md-10">
                    <h3 className="description">{review.title}</h3>
                    <p>{review.body}</p>
                  </div>
                </div>
              );
            })}

          <div className="col-md-2">
            {productReviews &&
              productReviews.map(review => {
                let rating = review.rating;
                let starArr = [];
                for (let i = 0; i < 5; i++) {
                  if (rating <= i) {
                    starArr.push(
                        <button
                        type="button"
                        key={i}
                        className="btn btn-default btn-grey btn-xs"
                      >
                        <span className="glyphicon glyphicon-star" />
                      </button>
                    )
                  } else {
                    starArr.push(<button type="button" key={i} className="btn btn-warning btn-xs">
                        <span className="glyphicon glyphicon-star" />
                      </button>);
                  }
                }
                return starArr;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    productList: state.products,
    allReviews: state.reviews,
  };
};

export default connect(mapState)(singleProduct);
