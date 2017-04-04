import React from 'react';

class CreateIssue extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.clearForm();
    let name = this.props.repoName;
    const newIssue = Object.assign({}, this.state);
    this.props.createIssue(name, newIssue).then(() => {
      this.props.fetchRepoIssues(name);
      this.setState({
        title: '',
        body: ''
      });
    });
  }

  clearForm(){
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++){
      inputs[i].value = '';
    }
  }

  render(){
    return(
      <div>
        <h2>Create an Issue</h2>
        <form id="issue-form">
          <label>Title:</label><br />
          <input value={ this.state.title }
              onChange={ this.handleChange("title")}
              className="issue-title"
          />
           <br />
          <label>Issue:</label><br />
          <textarea value={ this.state.body}
              onChange={ this.handleChange("body")}
              className="issue-title issue-body"
              rows="5"
          ></textarea>
          <br />
        </form>
        <button onClick={this.handleSubmit} className="submit-issue issue-title">Create Issue</button>
      </div>
    );
  }
}

export default CreateIssue;
