import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute , hashHistory } from 'react-router';
import app from './app';
import sessionFormContainer from './session_form/session_form_container';


const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

const root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={app} />
        <Route path="/login" component={sessionFormContainer}  />
        <Route path="/signup" component={sessionFormContainer}  />
    </Router>
  </Provider>
);

export default root;
