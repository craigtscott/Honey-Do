import React from 'react';
import { Link, withRouter  } from 'react-router';
import ListContainer from '../list/list_index_container';

class dash extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidUpdate() {
  this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (!this.props.loggedIn) {
      this.props.router.push("/login");
    }
  }

  render(){
    return(
      <div>

      <h1>placeholder</h1>
      <ListContainer />
    </div>
    );
  }

}

export default dash;
