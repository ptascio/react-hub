import React from 'react';
import ProfileContainer from './profile/profile_container';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
    <section>
      { this.props.children }
    </section>
  );
  }
}

export default App;
