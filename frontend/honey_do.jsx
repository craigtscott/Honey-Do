import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
