import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
// import {  fetchList,
//           fetchAllLists,
//           createList,
//           updateList,
//           deleteList } from './util/list_api_util';
// import { requestlist,
//           requestlists,
//           createlist,
//           updatelist,
//           destroylist } from './actions/list_actiogns';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // window.fetchList = fetchList;
  // window.fetchAllLists = fetchAllLists;
  // window.createList = createList;
  // window.updateList = updateList;
  // window.deleteList = deleteList;

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
