import when from 'when';
import reqwest from 'reqwest';
import LoginActions from 'src/actions/login-action';

class AuthService {
  login(username, password) {
    return when(reqwest({
      url: 'http://localhost:3000/login',
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    })).then(response => {
      LoginActions.loginUser(response.id_token);
      return true;
    })
  }
}

export default new AuthService();
