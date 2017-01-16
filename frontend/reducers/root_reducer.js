import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import listsReducer from './lists_reducer';


const RootReducer = combineReducers({
  session: sessionReducer,
  lists: listsReducer
});


export default RootReducer;
