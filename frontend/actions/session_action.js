export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import {hashHistory, withRouter }from 'react-router';
import * as ApiUtil from '../util/session_api_util';

export const login = user => dispatch => {
  debugger;
  return(
  ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);
};

export const logout = () => dispatch => {
  return (
  ApiUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);
};
export const signup = user => dispatch => {

  return (
    ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );
};
const receiveCurrentUser = currentUser => {
debugger;
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = errors => ({

  type: RECEIVE_ERRORS,
  errors
});
