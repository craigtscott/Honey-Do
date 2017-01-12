import React from 'react';
import GreetingContainer from './navbar/navbar_container';
import splash from './splash/splash';
const app = ({ children }) => (
  <div>
    <GreetingContainer />
    {children}
  </div>

);

export default app;
