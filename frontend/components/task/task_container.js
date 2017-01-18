import { connect } from 'react-redux';
import Task from './task';
import {fetchAllTasks,
        deleteTask,
        createTask,
        updateTask} from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    tasks: state.tasks,
    listId: ownProps.params.listId,
    listName: state.lists[ownProps.params.listId]

  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: (id) => dispatch(fetchAllTasks(id)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task);
