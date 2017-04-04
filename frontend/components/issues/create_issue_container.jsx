import { connect } from 'react-redux';
import { fetchRepoIssues, createIssue } from '../../actions/issue_actions';
import CreateIssue from './create_issue';

const mapStateToProps = state => {
  return {
    issues: state.issues
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRepoIssues: (name) => dispatch(fetchRepoIssues(name)),
    createIssue: (repo, issue) => dispatch(createIssue(repo, issue))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIssue);
