import { connect } from 'react-redux';
import dash from './dash';

const mapStateToProps = ({session}) => {
  return {loggedIn: Boolean(session.currentUser)};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dash);
