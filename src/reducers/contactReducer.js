import { ADD_CONTACT } from '../actions/contact';

const contactInitialState = {
  name: 'Create a new contact'
};

export const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
