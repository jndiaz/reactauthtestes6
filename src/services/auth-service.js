import when from 'when';
import reqwest from 'reqwest';

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
      console.log(response);
      return true;
    })
  }
}

export default new AuthService();
