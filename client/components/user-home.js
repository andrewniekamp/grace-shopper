import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store,{ getCartThunk } from '../store';

/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email, userId } = props;
  !props.cart ? store.dispatch(getCartThunk(userId)) : console.log('nice try!')
  return (
    <div>
      <h3>Welcome {email}</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userId: state.user.id
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
