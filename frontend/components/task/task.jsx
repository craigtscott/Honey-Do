import React from 'react';
import { Link, withRouter  } from 'react-router';
import merge from 'lodash/merge';

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list_id: 0,
      title: "",
      id: 0,
    };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setList = this.setList.bind(this);
    this.toggleDone = this.toggleDone.bind(this);

    this.deleteTask = this.props.deleteTask;
  }

  setList(id) {
    this.setState({list_id: id});
  }


  handleNewTask(e) {
    debugger;
    e.preventDefault();
    const task = Object.assign({}, this.state);
    this.setState({title: ""});
    delete task.id;
    this.props.createTask(task);
  }

  handleDelete(id) {
    return ((e) => {
    e.preventDefault();
    this.deleteTask(id);
  });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleDone(e) {
    debugger;
      if (this.state.done === false){
      this.setState({done: true});
    } else {
      this.setState({done: false});
    }
  }
  render(){
    debugger;
    const addTask =  (
      <div key="addTask">
        <form onSubmit={this.handleNewTask}>
          <input type="text"
            value={this.state.title}
            placeholder="New task"
            onChange={this.update("title")}
            />
          <input type="submit" value="Add task" />

        </form>
      </div>
    );

    const tasks = Object.keys(this.props.tasks).map(taskId => this.props.tasks[taskId]);
    const taskItem = tasks.map( (task, idx) => {

      return(
        <li key={task.id} className="taskItem">
          <input type="checkbox" onChange={(e) => this.toggleDone(e)}/>
          {task.title}
          <button onClick={this.handleDelete(task.id)} className="listDelete">X</button>
        </li>
      );
    });


    return(
    <div>
      <ul>
        { addTask }
        { taskItem }
      </ul>
    </div>
    );
  }

}

export default Tasks;
