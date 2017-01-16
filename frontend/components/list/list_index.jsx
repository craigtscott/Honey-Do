import React from 'react';
import { Link, withRouter  } from 'react-router';

class List extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllLists();
  }



  render(){
      const lists = Object.keys(this.props.lists).map(listId => this.props.lists[listId]);
      const indexItems = lists.map( (list, idx) => {

        return (
          <li>
            {list.title}
          </li>
        );
      });

    return(
      <div>
      <h1>placeholder for lists</h1>
      <ul>
        { indexItems }
      </ul>
    </div>
    );
  }

}

export default List;
