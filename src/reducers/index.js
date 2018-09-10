import { combineReducers } from 'redux';
import { ADD_CONTACT } from '../actions/contact';

const contactInitialState = {
  name: 'Create a new contact'
};

const contact = (state = contactInitialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, name: action.name };
    default:
      return state;
  }
}

let contactCounter = 0;
const dashboardInitialState = {
  contactCounter: 0
};

const dashboard = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contactCounter: ++contactCounter };
    default:
      return state;
  }
};

export default combineReducers({
  contact,
  dashboard
})
