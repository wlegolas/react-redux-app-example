import { combineReducers } from 'redux';
import { contactReducer as contact } from './contactReducer';
import { dashboardReducer as dashboard } from './dashboardReducer';

export default combineReducers({
  contact,
  dashboard
});
