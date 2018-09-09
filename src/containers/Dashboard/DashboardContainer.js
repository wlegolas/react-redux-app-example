import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';

const mapStateToProps = (state) => {
  return {
    countContacts: state.countContacts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDashboardItemClick: (id) => {
      dispatch({
        type: 'TOGGLE_DASHBOARD_ITEM',
        id
      })
    }
  };
};

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;
