import { connect } from 'react-redux';
import { fetchRepoIssues } from '../../actions/issue_actions';
import Repos from './repos';

const  mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    issues: state.issues.issues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepoIssues: (repo) => dispatch(fetchRepoIssues(repo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
