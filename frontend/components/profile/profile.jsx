import React from 'react';

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      pic: '',
      username: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: 'https://api.github.com/users/ptascio',
      success: data => {
        console.log(data);
        const userPic = data.data.avatar_url;
        this.setState({
          pic: userPic,
          username: data.data.name,
        });
      }
    });
  }

  render(){
    return (
      <div>
        <h1>Component</h1>
        <button onClick={this.handleClick}>Click Me</button><br />
        <p>{this.state.username}</p>
        <img src={this.state.pic} />
      </div>
    );
  }
}

export default Profile;
