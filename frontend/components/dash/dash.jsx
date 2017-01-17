import React from 'react';
import { Link, withRouter  } from 'react-router';
import ListContainer from '../list/list_index_container';
import TasksContainer from '../task/task_container';

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
        {this.props.children}
    </div>
    );
  }

}

export default dash;
