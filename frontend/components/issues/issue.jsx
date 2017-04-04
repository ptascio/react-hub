import React from 'react';
import CreateIssueContainer from './create_issue_container';
import { Link } from 'react-router';

class Issue extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      issues: '',
    };
    this.closeThisIssue = this.closeThisIssue.bind(this);
  }

  componentDidMount(){
    let name = this.props.routeParams.reponame;
    let issues = this.props.fetchRepoIssues(name);
    this.setState({
      issues: issues
    });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
      this.setState({
        issues: nextProps.issues.issues,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
      return true;
    }
    return false;
  }

  closeThisIssue(url, name){
    let data = {"state" : "closed"};
    this.props.closeRepoIssue(url, data, name).then(() => {
      this.props.fetchRepoIssues(name);
    });

  }


  render(){
    let name = this.props.routeParams.reponame;
    let issues = this.state.issues;
    let issuesList;
    if (issues && issues.length > 0){
      issuesList = issues.map((issue) => {
        return(
          <li key={issue.id} className='repo-list' onClick={() => this.closeThisIssue(issue.url, name)}>
            <strong>{issue.title}</strong>: {issue.body}
          </li>
          );
      });
    }else {
      issuesList = <li>No Issues Here!</li>;
    }
    return(
      <div className="main-section">
        <div className="header flex-item">
          <Link to='/'><img src="/app/assets/images/reacthub.png"/></Link>
            <h3 className="flex-item inner-header logo">ReactHub</h3>
            <p className="flex-item inner-header">{this.props.routeParams.reponame}</p>
        </div>
        <div className='main-issues'>
          <h1>Open {this.props.routeParams.reponame} Issues</h1>
            <p>Simply click on the issue to close it.</p>
            <ul>
              { issuesList }
            </ul>
          <CreateIssueContainer repoName={this.props.routeParams.reponame} />
        </div>
      </div>
    );
  }
}

export default Issue;
