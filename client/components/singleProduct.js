import React from "react";
import { connect } from "react-redux";
import Reviews from "./reviews";

export const singleProduct = props => {
  let inventory = props.productList;
  let id = props.match.params.id;
  let singleItem = inventory.filter(item => item.id == id);
  const getReviewsForProduct = productId =>
    props.allReviews.filter(
      review => review.productId.toString() === productId
    );
  let productReviews = getReviewsForProduct(id);

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
                    <img
                      src="https://memegenerator.net/img/images/600x600/2154021/not-bad-obama.jpg"
                      className="img-rounded"
                      height="50px"
                    />
                    <h5>Dis be author name</h5>
                    <p>
                      {review.createdAt.slice(0, 10)}
                      <br /> added (number) days ago
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
            {
              productReviews &&
              productReviews.map(review => {
                let rating = review.rating
                let starArr = []
                for (let i = rating; i > 0; i--){
                  starArr.push(<button type="button" key={review.id} className="btn btn-warning btn-xs">
                      <span className="glyphicon glyphicon-star" />
                    </button>
                  );
                }
                return starArr
              })
            }
          </div>

            </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    productList: state.products,
    allReviews: state.reviews
  };
};

export default connect(mapState)(singleProduct);
