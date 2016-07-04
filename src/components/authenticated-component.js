import React from 'react';
import LoginStore from 'src/stores/login-store';
import AppHistory from 'src/utils/history';

export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    constructor() {
      super();
      this.state = this._getLoginState();
    }

    _getLoginState() {
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.user,
        token: LoginStore.token,
      };
    }

    componentWillMount() {
      if(!LoginStore.isLoggedIn()) {
        AppHistory.push('/login');
        this.render = function () {
          return false;
        }
      }
    }

    componentDidMount() {
      LoginStore.addChangeListener(this._onChange.bind(this));
    }

    _onChange() {
      this.setState(this._getLoginState());
    }

    componentWillUnmount() {
      LoginStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          user={this.state.user}
          token={this.state.token}
          userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};
