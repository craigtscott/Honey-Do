import React from 'react';
import GreetingContainer from './navbar/navbar_container';

const app = ({ children }) => (
  <div className="splash">
    <GreetingContainer />
    <div className="logo">
      <h1>Honey Do</h1>
    </div>
    <div className="logo2">
      <h1>A ToDo<br/>list for the busy bee</h1>
    </div>
    { children }
  </div>
);

export default app;
