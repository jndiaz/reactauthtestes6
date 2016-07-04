import React from 'react';
import AuthenticatedComponent from 'src/components/authenticated-component';

export default AuthenticatedComponent(class HomeView extends React.Component {

  constructor(){
    super();
  }

  render(){
    return(
      <div className="container home">
        <h1>Hello {this.props.user.username}</h1>
      </div>
    )
  }
});
