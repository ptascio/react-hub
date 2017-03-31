import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    store: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
