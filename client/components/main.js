import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
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
  return (
  <div>
    <h1>Booze Brothers</h1>
    <nav>
      {isLoggedIn ? <div className = "Main-Nav">
        {/* The navbar will show these links after you log in */}
            <div >
              <NavLink className = "Main-Nav-a" to="/home">Home</NavLink>
              <a className = "Main-Nav-a" href="#" onClick={handleClick}>
                Logout
                  </a>
              <NavLink className = "Main-Nav-a" to="/products">Products</NavLink>
            </div>
            <div>
              <NavLink className = "Main-Nav-a" to="/cart"> {deepLength} <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /></NavLink>
            </div>
            </div> : <div className = "Main-Nav">
          {/* The navbar will show these links before you log in */}
          <div >
          <NavLink className = "Main-Nav-a" to="/login">Login</NavLink>
          <NavLink className = "Main-Nav-a" to="/signup">Sign Up</NavLink>
          <NavLink className = "Main-Nav-a" to="/products">Products</NavLink>
          <NavLink className = "Main-Nav-a" to="/addProduct"> Add Products </NavLink>
          </div>
          <div>
          <NavLink className = "Main-Nav-a" to="/cart"> {deepLength} <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true" /></NavLink>
          </div>
        </div>}
    </nav>
    <hr />
    {children}
    <footer>
    </footer>
  </div>);
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: state.user.id,
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
