import React from 'react';
import { Link, withRouter  } from 'react-router';
import merge from 'lodash/merge';
import Dropdown from 'react-dropdown';

class Tasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      editTitle: "",
      detailShow: "none",
      id: null,
      listId: null
    };

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.openDetail = this.openDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
    this._onSelect = this._onSelect.bind(this);


    this.deleteTask = this.props.deleteTask;
    this.updateTask = this.props.updateTask;
  }

  _onSelect(option) {
    this.setState({listId: option.value});
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
                    list_id: this.state.listId,
                    done: this.state.doneZ};

      this.updateTask(task);
      this.closeDetail(e);
      this.props.router.push(`/dash/${this.state.listId}`);
    }


  openDetail(task) {
    return((e) => {
      e.preventDefault();
      this.setState({editTitle: `${task.title}`});
      this.setState({detailShow: "show"});
      this.setState({id: `${task.id}`});
      this.setState({doneZ: `${task.done}`});
      this.setState({listId: this.props.listId});
    });
  };

  closeDetail(e){
    if(e){
      e.preventDefault();
    }
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

  componentWillUpdate() {
    if (this.state.detailShow !== "none" && this.props.params.listId !== this.state.listId){
      this.closeDetail();
    }
  }


  render(){

    let listId = this.props.params.listId;
    let listTitle = "";
    if (this.props.listName){
      listTitle = this.props.listName.title;
    } else {
      listTitle = "Search";
    }

    let longEnough = (this.state.title === "" && this.state.detailShow !== "taskDetails" )? "disabled" : "";
    let name = this.state.detailShow === "none" ? "none" : "taskDetails";
    let name2 = this.state.detailShow === "none" ? "listInfo" : "none2";



    const addTask = (
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
            <input type="checkbox" checked={task.done} onChange={this.toggleDone(task.id)} className="checkbox"/>
            <div className="taskLeft" >
              <div className="taskTitle" onClick={this.openDetail(task)} >
                {task.title}
              </div>
              <div className="taskDelete">
                <i className="fa fa-trash" onClick={this.handleDelete(task.id)} aria-hidden="true"></i>
              </div>
            </div>
          </li>
        );
    });

    const options = Object.keys(this.props.lists).map(listId => ({value: listId, label: this.props.lists[listId].title}));

    let value;
    if (this.props.lists[this.props.listId]) {
      value = this.props.lists[this.props.listId].title;
    } else {
      if (this.state.id) {
        value = this.props.lists[this.props.tasks[this.state.id].list_id].title;
      }
    }
    const taskDetail = (
      <div>
        <form onSubmit={this.handleEdit} className="editForm">
          <input type="text"
            className="editInput"
            value={this.state.editTitle}
            onChange={this.update("editTitle")}
          />
        <input type="submit" value="Update task" className="editSave"/>
        </form>
        <Dropdown options={options} onChange={this._onSelect} value={value} placeholder="Select a list" />
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
