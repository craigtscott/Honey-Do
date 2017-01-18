import React from 'react';
import { Link, withRouter  } from 'react-router';
import merge from 'lodash/merge';

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDone = this.toggleDone.bind(this);

    this.deleteTask = this.props.deleteTask;
  }


  handleNewTask(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state, {list_id: this.props.listId});
    this.setState({title: ""});
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

  toggleDone(id) {
    return ((e) => {
      const task = this.props.tasks[id];
      task.done = !task.done;
      this.props.updateTask(task);
    });
  }

  render(){
    let longEnough = this.state.title === "" ? "disabled" : "";

    const addTask =  (
      <div>
        <form onSubmit={this.handleNewTask} className="taskForm">
          <input type="text"
            className="taskInput"
            value={this.state.title}
            placeholder="New task"
            onChange={this.update("title")}
            />
          <input type="submit" value="Add task" disabled={`${longEnough}`} className="taskSubmit"/>

        </form>
      </div>
    );

    const tasks = Object.keys(this.props.tasks).map(taskId => this.props.tasks[taskId]);
    const taskItem = tasks.map( (task, idx) => {

      return(
        <li key={idx} className="taskItem">
          <div className="taskLeft">
            <input type="checkbox" checked={task.done} onChange={this.toggleDone(task.id)}/>
            <div className="taskTitle">
              {task.title}
            </div>
          </div>
          <div className="taskDelete">
          <i className="fa fa-trash" onClick={this.handleDelete(task.id)} aria-hidden="true"></i>
        </div>
        </li>
      );
    });


    return(
    <div className="taskDiv">
      { addTask }
      <ul className="taskList">
        { taskItem }
      </ul>
    </div>
    );
  }

}

export default Tasks;
