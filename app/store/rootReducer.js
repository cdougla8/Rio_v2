import { combineReducers } from 'redux';

import routesReducer from 'reducers/routes/routesReducer';
import sessionReducer from 'reducers/session/sessionReducer';
import firestoreReducer from 'reducers/firestore/firestoreReducer';
import todolistReducer from 'reducers/todolist/todolistReducer';

export default combineReducers({
  routesReducer,
  sessionReducer,
  firestoreReducer,
  todolistReducer
});
