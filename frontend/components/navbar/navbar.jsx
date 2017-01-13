
import React from 'react';
import { Link, withRouter } from 'react-router';



const navbar = ({ currentUser, logout, login }) => {


  const user = {user_name: "demo", password: "password"};

  let navbarContent =   (
  <div className="login-buttons">
    <div className="demo" >
      <Link to="/dash" onClick={() => login(user)} activeClassName="current">Demo</Link>
    </div>
    &nbsp;
    <div className="login" >
      <Link to="/login" activeClassName="current">Login</Link>
    </div>
    &nbsp;or&nbsp;
    <div className="signin">
      <Link to="/signup"  activeClassName="current">Sign up!</Link>
    </div>
  </div>);

  if(currentUser){
    navbarContent = (
      <div className="login-buttons">
        <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      <div className="login" >
        <Link to="/" activeClassName="current" onClick={logout}>Logout</Link>
      </div>
    </div>
    );
  }
  return(
    <div className="navbar">
      <nav className="login-signup">
          <img className="comb" src="http://res.cloudinary.com/data4015/image/upload/v1484267695/comb_nw70fl.png" alt="Honey Comb" />
          { navbarContent }
      </nav>
    </div>
  );
};

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

// const navbar = ({ currentUser, logout }) => (
//   currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
// );

export default navbar;


//////Honeycomb by Arthur Shlain from the Noun Project//////
