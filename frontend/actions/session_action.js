export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import hashHistory from 'react-router';
import * as ApiUtil from '../util/session_api_util';

export const login = user => dispatch => (
  ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  ApiUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({

  type: RECEIVE_ERRORS,
  errors
});
