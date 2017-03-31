import React from 'react';
import Repos from '../repos/repos';

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
    this.handleChange = this.handleChange.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    console.log(this.state.login);
    this.setState({
      login: e.target.value
    });
  }

  getUser(){
    this.props.fetchUser(this.state.login);
  }

  getRepos(){
    this.props.fetchRepos(this.state.login);
  }

  componentWillReceiveProps(newProps, newState){
    this.setState({
      pic: newProps.profile.avatar_url,
      fullname: newProps.profile.name,
      message: newProps.profile.message,
      repos: newProps.repos
    });
  }

  shouldComponentUpdate(prevState, newState){
    if (newState !== prevState){
      return true;
    }
  }

  revealReposButton(){
    if (this.state.fullname.length > 0){
      return(
        <div>
          <button onClick={this.getRepos}>FetchRepos for {this.state.fullname}</button>
        </div>
      );
    }else {
      return null;
    }
  }

  revealRepos(){

    if (this.state.repos !== undefined){
      return(
        <Repos repos={this.state.repos} />
      );
    }else {
      return null;
    }
  }

  render(){
    return (
      <div>
        <h1>Profile</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.getUser}>Click Me</button><br />
        <h2>User {this.state.message}</h2>
        <p>{this.state.fullname}</p>
        <img src={this.state.pic} />
        { this.revealReposButton() }
        { this.revealRepos() }
      </div>
    );
  }
}

export default Profile;
