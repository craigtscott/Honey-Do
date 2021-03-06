import React from 'react';
import { Link, withRouter  } from 'react-router';
import Modal from 'react-modal';


const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '100px',
    left                       : '200px',
    // right                      : '400px',
    // bottom                     : '300px',
    width                      : '400px',
    height                     : '200px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      formType: "",
      author_id: this.props.session.currentUser.id,
      title: "",
      id: 0,
    };



    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetTasks = this.handleGetTasks.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.makeNewList = this.makeNewList.bind(this);

    this.deleteList = this.props.deleteList;
    this.fetchAllTasks = this.props.fetchAllTasks;
    this.addList = this.props.addList;
    this._handleClick= this.props._handleClick;

    this.firstList = this.firstList.bind(this);
  }

  handleDelete(id) {
    return ((e) => {
    e.preventDefault();
    this.deleteList(id);

  });
  }

  handleSubmit(e) {

    e.preventDefault();
    const list = Object.assign({}, this.state);
    delete list.modalOpen;
    if (this.state.formType === "Add"){
      delete list.id;
      delete list.formType;
      this.props.createList(list).then(res => {
        this.getTasks(res.list.id);
      });
    } else {
      delete list.formType;
      this.props.updateList(list);
    }
    this.closeModal();
    this.setState({title: ""});
  }

  handleGetTasks(id) {
    return ((e) => {
      e.preventDefault();
      this.getTasks(id);
    });
  }

  getTasks(id) {
    this.fetchAllTasks(id);
    if (this.props.params.listId !== id){
      this.props.router.push(`/dash/${id}`);
    }
  }

  firstList(id) {
    return ((e) =>{
      this.handleGetTasks(id);
    });
  }

  componentDidMount() {
    this.props.fetchAllLists().then(() => {
      if(this.props.lists) {
        let min;
        Object.keys(this.props.lists).forEach(id => {
          if(!min || id < min) {
            min = id;
          }
        });
        if (Number.isInteger(parseInt(min))){
          this.getTasks(min);
        } else {
          this.makeNewList();
        }
      }
    });
  }


  makeNewList() {
    let list = {title: "New List", author_id: this.props.session.currentUser.id};
    this.props.createList(list).then(res => {
      this.getTasks(res.list.id);
    });
  }

  openModal() {
    this.setState({
        modalOpen: true,
        formType: "Add"
     });
  }

  openEditModal(list) {
   return ( (e) => {
      this.setState({
        modalOpen: true,
        formType: "Edit",
        title: list.title,
        id: list.id
      });
    });
  }


  closeModal() {
    this.setState({modalOpen: false});
    this.setState({title: ""});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }





  render(){
    let longEnough = this.state.title === "" ? "disabled" : "";
    let submitText, textFeild;

    if(this.state.formType === "Add"){
      submitText = "Add";
    } else {
      submitText = "Update";
    }

      const lists = Object.keys(this.props.lists).map(listId => this.props.lists[listId]);
      const indexItems = lists.map( (list, idx) => {
        if (idx === 0){
          this.firstList(list.id);
        }

        let listItem = "listItem";
        if (this.props.params.listId == list.id) {
          listItem = "listItem selected";
        }
        return (
          <li key={idx} className={listItem} >
            <div className="listItemTitle" onClick={this.handleGetTasks(list.id)}>
              {list.title}
            </div>
            <div className="listButtons">
                <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={this.openEditModal(list)} />
                <i className="fa fa-minus-square-o" onClick={this.handleDelete(list.id)} aria-hidden="true" />
            </div>
          </li>
        );
      });


    return(
      <div className="listSideBar">
      <ul>
        <div className="listHeader">
          <h3 className="listsTitle">Lists</h3>
          <div className="listAdd">
            <i className="fa fa-plus-square-o" onClick={this.openModal} aria-hidden="true"></i>
          </div>
        </div>
        <div className="listItemDiv">
          { indexItems }
        </div>
      </ul>
      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="New List"
        >
        <h2 className="modalTitle">{submitText} a list</h2>
          <form onSubmit={this.handleSubmit} className="modalForm">
            <label className="modalLable">list name:</label>
              <div className="modalDiv">
                <input type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        className="modalInput"
                        id="newList"
                />

              <input type="submit" value={`${submitText} list`} className="modalButton" disabled={`${longEnough}`}/>
          </div>
          </form>

      </Modal>
    </div>
    );
  }

}

export default withRouter(List);
