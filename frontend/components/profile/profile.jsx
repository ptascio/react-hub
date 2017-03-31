import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      pic: '',
      fullname: '',
      login: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    console.log(this.state.login);
    this.setState({
      login: e.target.value
    });
  }
  handleClick(){
    this.props.fetchUser(this.state.login);
  }

  componentWillReceiveProps(newProps, newState){
    this.setState({
      pic: newProps.profile.avatar_url,
      fullname: newProps.profile.name
    });
  }

  shouldComponentUpdate(prevState, newState){
    if (newState !== prevState){
      return true;
    }
  }

  render(){

    return (
      <div>
        <h1>Profile</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click Me</button><br />
        <p>{this.state.fullname}</p>
        <img src={this.state.pic} />
      </div>
    );
  }
}

export default Profile;
