import React from 'react';

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
  }

  render() {
    return (
      <div className="login">
        <form>
          <input class="login--input" text="text" onChange={this._onUsernameChange.bind(this)} placeholder="username" />
          <input class="login--input" text="passowrd" onChange={this._onPasswordChange.bind(this)} placeholder="password" />
          <button class="login--button" type="submit" onClick={this.login}>Login</button>
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
