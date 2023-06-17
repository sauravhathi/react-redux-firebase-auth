import { combineReducers } from 'redux';

// Import your individual reducers
import authReducer from './authReducer';

// Define the root reducer by combining individual reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;