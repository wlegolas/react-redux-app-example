import { combineReducers } from 'redux'

const contactInitialState = {
  name: 'Create a new contact'
};

const contact = (state = contactInitialState, action) => {
  console.log(`Contact`, state)
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, name: action.name };
    default:
      return state;
  }
}

let contactCounter = 0;
const dashboardInitialState = {
  contactCounter: 0
};

const updateDashboardReducer = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, contactCounter: contactCounter++ };
    default:
      return state;
  }
}

export default combineReducers({
  contact,
  updateDashboardReducer
})
