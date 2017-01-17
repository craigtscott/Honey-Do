import { connect } from 'react-redux';
import List from './list_index';
import {fetchAllLists, deleteList, createList, updateList} from '../../actions/list_actions';

const mapStateToProps = state => {
  return (state);
};

const mapDispatchToProps = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists()),
  deleteList: (id) => dispatch(deleteList(id)),
  createList: (list) => dispatch(createList(list)),
  updateList: (list) => dispatch(updateList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
