import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import store, { logout, getCartThunk, emptyCart } from '../store';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  let deepLength = 0;


  const { children, handleClick, isLoggedIn, cart, userId } = props
  cart && cart.products ? deepLength = cart.products.length : console.log('no length');
  // cart.length && cart.forEach(itemArr => {
    //   deepLength += itemArr.length;
    // })
  cart && userId && cart.status === 'Initial' ? store.dispatch(getCartThunk(userId)) : console.log('nice try!', cart)
  return (<div>
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
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    userId: state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
      dispatch(emptyCart())
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
