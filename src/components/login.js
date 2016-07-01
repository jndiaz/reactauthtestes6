import React from 'react';

import AuthService from 'src/services/auth-service';

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    AuthService.login(this.state.username, this.state.password)
               .catch(err => {
                  console.log("Error logging in", err);
               });
    return false;
  }

  render() {
    return (
      <div className="login">
        <form>
          <input class="login--input" type="text" onChange={this._onUsernameChange.bind(this)} placeholder="username" />
          <input class="login--input" type="password" onChange={this._onPasswordChange.bind(this)} placeholder="password" />
          <button class="login--button" type="submit" onClick={this.login.bind(this)}>Login</button>
        </form>
      </div>
    );
  }

  _onUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  _onPasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

}
