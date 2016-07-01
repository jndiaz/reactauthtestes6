import React from 'react';

import Login from 'src/components/login';

export default class LoginView extends React.Component {

  constructor(){
    super();
  }

  render(){
    return(
      <div className="login-container">
        <Login />
      </div>
    )
  }
}
