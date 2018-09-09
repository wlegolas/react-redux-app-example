import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onAddContactClick: PropTypes.func.isRequired
  }

  setNameInputRef = (node) => {
    this.nameInput = node;
  }

  handleAddContactClick = () => {
    this.props.onAddContactClick(this.nameInput.value);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="contact-container">
        <div className="toolbar">
          <button value="add" onClick={this.handleAddContactClick}>Add Contact</button>
        </div>
        <h1>Contact: {name}</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={this.setNameInputRef} />
        </div>
      </div>
    );
  }
}

export default Contact;
