import { connect } from 'react-redux';
import List from './list_index';
import {fetchAllLists} from '../../actions/list_actions';

const mapStateToProps = state => {
  return (state);
};

const mapDispatchToProps = dispatch => ({
  fetchAllLists: () => dispatch(fetchAllLists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
