import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* import reducers */
import questionReducer from '../redux/question_reducer.js';
import resultReducer from '../redux/result_reducer.js';
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

/* store configuration with reducers */

export default configureStore({ reducer: rootReducer });
