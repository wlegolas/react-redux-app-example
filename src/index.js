import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

const contactInitialState = {
  name: 'Create a new contact'
};

const addContactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, name: action.name };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
