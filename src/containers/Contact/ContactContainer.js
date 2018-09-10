import { connect } from 'react-redux';
import Contact from '../../components/Contact/Contact';

const mapStateToProps = ({ contact }) => {
  return {
    name: contact.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContactClick: (name) => {
      dispatch({
        type: 'ADD_CONTACT',
        name
      })
    }
  };
};

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
