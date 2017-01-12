import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute , hashHistory } from 'react-router';
import app from './app';
import sessionFormContainer from './session_form/session_form_container';
import dashContainer from './dash/dash_container';
import splash from './splash/splash';

const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {

      replace('/dash');
    }
  };

const root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={app}>
        <IndexRoute component={splash} />

        <Route path="/login" component={sessionFormContainer}  onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={sessionFormContainer}  onEnter={_redirectIfLoggedIn}/>
        <Route path="/dash" component={dashContainer}  />
      </Route>
    </Router>
  </Provider>
);

export default root;
