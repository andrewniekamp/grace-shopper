import React from 'react';
import { connect } from 'react-redux';

export const reviews = props => {
  console.log('props from reviews', props)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img
            src="https://memegenerator.net/img/images/600x600/2154021/not-bad-obama.jpg"
            className="img-rounded"
            height="50px"
          />
          <h5>
            <a href="#">Obama</a>
          </h5>
          <p>
            January 29, 2016<br />1 day ago
          </p>
        </div>
        <div className="col-md-2">
          <div>
            <button type="button" className="btn btn-warning btn-xs">
              <span className="glyphicon glyphicon-star" />
            </button>
            <button type="button" className="btn btn-warning btn-xs">
              <span className="glyphicon glyphicon-star" />
            </button>
            <button type="button" className="btn btn-warning btn-xs">
              <span className="glyphicon glyphicon-star" />
            </button>
            <button type="button" className="btn btn-default btn-grey btn-xs">
              <span className="glyphicon glyphicon-star" />
            </button>
            <button type="button" className="btn btn-default btn-grey btn-xs">
              <span className="glyphicon glyphicon-star" />
            </button>
          </div>
          <h3 className="description">I like it</h3>
          <p>No hangover</p>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    allReviews: state.reviews,
    productList: state.products,
  };
};

export default connect(mapState)(Reviews);
