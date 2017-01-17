import { connect } from 'react-redux';
import List from './list_index';
import {fetchAllLists, deleteList, createList, updateList} from '../../actions/list_actions';
import {fetchAllTasks} from '../../actions/task_actions';

const mapStateToProps = state => {
  return (state);
};

const mapDispatchToProps = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists()),
  deleteList: (id) => dispatch(deleteList(id)),
  createList: (list) => dispatch(createList(list)),
  updateList: (list) => dispatch(updateList(list)),
  fetchAllTasks: (id) => dispatch(fetchAllTasks(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
