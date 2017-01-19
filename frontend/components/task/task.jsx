import React from 'react';
import { Link, withRouter  } from 'react-router';
import merge from 'lodash/merge';

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      editTitle: "",
      detailShow: "none",
      id: null
    };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.openDetail = this.openDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);


    this.deleteTask = this.props.deleteTask;
    this.updateTask = this.props.updateTask;
  }


  handleNewTask(e) {
    e.preventDefault();
    const task = {title: this.state.title, list_id: this.props.listId, done: false};
    this.setState({title: ""});
    this.props.createTask(task);
  }

  handleDelete(id) {
    return ((e) => {
    e.preventDefault();
    this.deleteTask(id);
  });
  }

  handleEdit(e) {
      e.preventDefault();
      const task = {id: this.state.id,
                    title: this.state.editTitle,
                    list_id: this.props.listId,
                    done: this.state.doneZ};

      this.updateTask(task);
      this.closeDetail(e);
    }


  openDetail(task) {
    return((e) => {
      e.preventDefault();
      this.setState({editTitle: `${task.title}`});
      this.setState({detailShow: "show"});
      this.setState({id: `${task.id}`});
      this.setState({doneZ: `${task.done}`});
    });
  };

  closeDetail(e){
      e.preventDefault();
      this.setState({editTitle: ""});
      this.setState({detailShow: "none"});
  };


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


    let listId = this.props.params.listId;
    let listTitle = "";
    if (this.props.listName){
      listTitle = this.props.listName.title;
    }

    let longEnough = (this.state.title === "" && this.state.detailShow !== "taskDetails" )? "disabled" : "";
    let name = this.state.detailShow === "none" ? "none" : "taskDetails";
    let name2 = this.state.detailShow === "none" ? "listInfo" : "none2";



    const addTask =  (
      <div>
        <form onSubmit={this.handleNewTask} className="taskForm">
          <input type="text"
            className="taskInput"
            value={this.state.title}
            placeholder="New task"
            onClick={this.closeDetail}
            onChange={this.update("title")}
            />
          <input type="submit" value="Add task" disabled={`${longEnough}`} className="taskSubmit"/>

        </form>
      </div>
    );

    let count = 0;
    let amtDone = 0;

    const tasks = Object.keys(this.props.tasks).map(taskId => this.props.tasks[taskId]);
    const taskItem = tasks.map( (task, idx) => {
      count += 1;
      if (task.done === true){ amtDone += 1;};

      return(
        <li key={idx} className="taskItem" >
          <input type="checkbox" checked={task.done} onChange={this.toggleDone(task.id)}/>
          <div className="taskLeft" onClick={this.openDetail(task)}>
            <div className="taskTitle">
              {task.title}
            </div>
            <div className="taskDelete">
              <i className="fa fa-trash" onClick={this.handleDelete(task.id)} aria-hidden="true"></i>
            </div>
          </div>
        </li>
      );
    });

    const taskDetail = (
      <div>
        <form onSubmit={this.handleEdit} className="editForm">
          <input type="text"
            className="editInput"
            value={this.state.editTitle}
            onChange={this.update("editTitle")}
          />
        <input type="submit" value="Edit task" className="editSave"/>
        </form>
      </div>
    );



    return(
    <div className="taskInfo">
      <div className="taskDiv">
        { addTask }
        <ul className="taskList" >
          { taskItem }
        </ul>
      </div>
      <div className={`${name2}`}>
        <div className="listTitle">
          {listTitle}
        </div>
        <div className="completed">
          {amtDone}/{count} completed
        </div>
      </div>
      <div className={`${name}`}>
        {taskDetail}
      </div>
  </div>
    );
  }

}

export default Tasks;
