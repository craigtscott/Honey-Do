import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const app = ({ children }) => (
  <div>
    <h1>Honey Do 1.0</h1>
    <GreetingContainer />
    { children }
  </div>
);

export default app;
