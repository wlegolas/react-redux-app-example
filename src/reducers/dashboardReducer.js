import { ADD_CONTACT } from '../actions/contact';

let contactCounter = 0;
const dashboardInitialState = {
  contactCounter: 0
};

export const dashboardReducer = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contactCounter: ++contactCounter };
    default:
      return state;
  }
};
