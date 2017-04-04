import React from 'react';
import Repos from '../repos/repos';
import ReposContainer from '../repos/repos_container';

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      pic: '',
      fullname: '',
      login: '',
      message: '',
      repos: undefined
    };
    this.getUser = this.getUser.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }


  getUser(){
    this.props.fetchUser();
  }

  getRepos(){
    this.props.fetchRepos();
  }

  componentWillReceiveProps(newProps, newState){
    if(newProps.repos !== this.props.repos || this.state.pic === ""){
    this.setState({
      pic: newProps.profile.profile.avatar_url,
      fullname: newProps.profile.profile.name,
      message: newProps.profile.profile.message,
      repos: newProps.repos
    });
  }
  }

  componentDidMount(){
    this.props.fetchUser().then(() => {
      this.props.fetchRepos();
    });
  }

  shouldComponentUpdate(prevState, newState){
    if (newState !== prevState){
      return true;
    }
  }

  revealRepos(){
    if (this.state.repos !== undefined){
      return(
        <ReposContainer repos={this.state.repos} />
      );
    }else {
      return null;
    }
  }

  render(){
    return (
      <div className="main-section">
        <div className="header flex-item">
          <img src="/app/assets/images/reacthub.png"/>
          <h3 className="flex-item inner-header logo">ReactHub</h3>
            <p className="flex-item inner-header">Hello, {this.state.fullname}</p>
        </div>
        <div className="profile-section flex-item">
          <img src={this.state.pic} className="profile-pic"/>
          { this.revealRepos() }
      </div>
      <div>
        <h2>Issues.</h2>
        <p>We've all got them, so don't hide it.</p>
        <p>Get your issues out into the open.</p>
        <p>Click on the repo name above to view or close it's issues.</p>
        <p>You can also make a new issue if you want.</p>
        <p>Because let's face it: We all have issues.</p>
        <p>Don't cover them up.</p>
      </div>
      </div>
    );
  }
}

export default Profile;
