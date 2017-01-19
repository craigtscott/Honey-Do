
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ""
    };

    this.state = {author_id: 0, title: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.currentUser = this.props.currentUser;
    this.searchTasks = this.searchTasks;
    this.logout = this.props.logout;
    this.login = this.props.login;
  }



  handleSubmit(e) {
    e.preventDefault();
    const user = {user_name: "demo", password: "password"};
    this.login(user).then(() => hashHistory.push("dash"));
  }

  handleSearch(e) {
    e.preventDefault();
    const query = this.state.query;
    this.props.searchTasks(query).then(() => hashHistory.push("dash/search"));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }





  render(){
  let navbarContent =   (
  <div className="login-buttons">
    <div className="demo" >
      <button onClick={this.handleSubmit} className="current">Demo</button>
    </div>
    &nbsp;
    <div className="login" >
      <Link to="/login" className="current">Login</Link>
    </div>
    &nbsp;or&nbsp;
    <div className="signin">
      <Link to="/signup"  className="current">Sign up!</Link>
    </div>
  </div>);

  if(this.props.currentUser){
    navbarContent = (
      <div className="login-buttons">
        <div className="greeting">
          <h2 className="header-name">Hi, {this.props.currentUser.first_name}!</h2>
        </div>
        <div className="login" >
          <button className="current" onClick={this.logout}>Logout</button>
        </div>
    </div>
    );
  }

  const searchBar = (
    <form onSubmit={this.handleSearch} className="searchForm">
      <input type="text"
              className="searchBar"
              value={this.state.query}
              onChange={this.update("query")}
              placeholder="Search..."/>
            <input type="submit" value="search" className="searchButton"/>

    </form>
  );
    return(
      <div className="navbar">
        <nav className="login-signup">
            <img className="comb" src="http://res.cloudinary.com/data4015/image/upload/v1484267695/comb_nw70fl.png" alt="Honey Comb" />
            { searchBar }
            { navbarContent }
        </nav>
      </div>
    );
  }
}


export default Navbar;


//////Honeycomb by Arthur Shlain from the Noun Project//////
