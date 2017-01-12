
import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <div className="navbar">
    <nav className="login-signup">
      <div className="login" >
        <Link to="/login" activeClassName="current">Login</Link>
      </div>
      &nbsp;or&nbsp;
      <Link to="/signup" className="signin" activeClassName="current">Sign up!</Link>
    </nav>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const navbar = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default navbar;
