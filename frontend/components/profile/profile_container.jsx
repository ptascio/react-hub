import { connect } from 'react-redux';
import { fetchUser, fetchRepos } from '../../actions/profile_actions';
import Profile from './profile';

const mapStateToProps = state => {
  return {
    profile: state.profile,
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchRepos: (username) => dispatch(fetchRepos(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
