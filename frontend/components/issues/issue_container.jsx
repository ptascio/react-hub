import { connect } from 'react-redux';
import { fetchRepoIssues, closeRepoIssue } from '../../actions/issue_actions';
import Issue from './issue';

const mapStateToProps = state => {
  return {
    issues: state.issues,
    deletedIssues: state.issues.deletedIssues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepoIssues: (name) => dispatch(fetchRepoIssues(name)),
    closeRepoIssue: (url, data, name) => dispatch(closeRepoIssue(url, data, name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issue);
