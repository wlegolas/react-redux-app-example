import React, { Component } from 'react';
import './App.css';
import ContactContainer from './containers/Contact/ContactContainer';
import DashboardContainer from './containers/Dashboard/DashboardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactContainer />
        <DashboardContainer />
      </div>
    );
  }
}

export default App;
