import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute , hashHistory } from 'react-router';
import app from './app';
import sessionFormContainer from './session_form/session_form_container';
import dashContainer from './dash/dash_container';
import listIndexContainer from './list/list_index_container';
import TaskContainer from './task/task_container';
import splash from './splash/splash';
import {receiveErrors} from '../actions/session_action';
import {fetchAllTasks} from '../actions/task_actions';

const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {

      replace('/dash');
    } else{
      store.dispatch(receiveErrors([]));
    }
  };
  const _showTasks = (nextState) => {
    store.dispatch(fetchAllTasks(nextState.params.listId));
  };


const _ensureLoggedIn = (nextState, replace) => {
   const currentUser = store.getState().session.currentUser;
   if (!currentUser) {
     replace('/login');
   }
 };

const root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={app}>
        <IndexRoute component={splash} onEnter={_redirectIfLoggedIn}/>
        <Route path="/login" component={sessionFormContainer}  onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={sessionFormContainer}  onEnter={_redirectIfLoggedIn}/>
        <Route path="/dash" component={dashContainer} onEnter={_ensureLoggedIn}>
          <Route path="/dash/:listId" component={TaskContainer} onEnter={_showTasks}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default root;
