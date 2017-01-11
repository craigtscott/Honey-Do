export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

import * as ApiUtil from '../util/sessio_api_util';

export const login = user => dispatch (
  ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user))),
  err => dispatch(receiveErrors(err.responceJSON))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER.
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS.
  errors
});
