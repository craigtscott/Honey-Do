import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import listsReducer from './lists_reducer';
import TaskReducer from './task_reducer';


const RootReducer = combineReducers({
  session: sessionReducer,
  lists: listsReducer,
  tasks: TaskReducer
});


export default RootReducer;
