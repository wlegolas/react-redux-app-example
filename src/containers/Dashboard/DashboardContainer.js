import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard/Dashboard';

const mapStateToProps = ({ dashboard }) => {
  return {
    contactCounter: dashboard.contactCounter
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
