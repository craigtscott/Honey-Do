import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_action';
import { searchTasks } from '../../actions/task_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
};

const mapDispatchToProps = user => dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    searchTasks: query => dispatch(searchTasks(query))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
