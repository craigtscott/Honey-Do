import React from 'react';
import { Link, withRouter  } from 'react-router';
import ListContainer from '../list/list_index_container';
import Tasks from '../task/task';

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
      <div className="dash">
      <ListContainer />
      <Tasks />
    </div>
    );
  }

}

export default dash;
