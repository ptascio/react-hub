import { connect } from 'react-redux';
import { fetchUser, fetchRepos } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    profile: state.profile,
    repos: state.profile.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    fetchRepos: () => dispatch(fetchRepos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
