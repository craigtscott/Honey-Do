import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import navbar from './navbar';

const mapStateToProps = ({ session }) => {
  return {currentUser: session.currentUser};
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navbar);
