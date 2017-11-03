import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store, { logout, products } from "../store";

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {


  const { children, handleClick, isLoggedIn, cart } = props
  let deepLength = 0;
  cart.forEach(itemArr => {
    deepLength += itemArr.length;
  })
  return (<div>
    <h1>Booze Brothers</h1>
    <nav>
      {isLoggedIn ? <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <a href="#" onClick={handleClick}>
          Logout
            </a>
      </div> : <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart"> {deepLength} <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /></Link>
        </div>}
    </nav>
    <hr />
    {children}
  </div>);
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
