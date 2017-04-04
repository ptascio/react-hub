import React from 'react';
import { Link } from 'react-router';

class Repos extends React.Component {
  constructor(props){
    super(props);

    this.getRepoIssues = this.getRepoIssues.bind(this);
  }

  getRepoIssues(name){
    this.props.fetchRepoIssues(name);
    console.log(this.props.issues);
  }

  shouldComponentUpdate(prevProps, newProps){
    if (newProps !== prevProps){
      return true;
    }
  }


  render(){
    var listRepos = this.props.repos.map((repo) => {
      let repoIssuesUrl = `/issues/${repo.name}`;
      return(
        <li key={repo.id} className="repo-list">
          <Link to={repoIssuesUrl}>
            {repo.name}
          </Link>
        </li>
      );
    });
    return(
        <div>
          <ul className="flex-item repo-list">
            {listRepos}
          </ul>
        </div>
    );
  }
}

export default Repos;
