import { connect } from 'react-redux';
import { fetchUser } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
