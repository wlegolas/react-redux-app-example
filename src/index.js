import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const contactInitialState = {
  name: 'Create a new contact'
};

const contact = (state = contactInitialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, name: action.name };
    default:
      return state;
  }
}

const store = createStore(reducers);

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
