import ACTIONS from 'src/constants/actions';
import AppHistory from 'src/utils/history';
import AppDispatcher from 'src/dispatchers/app-dispatcher';

export default {
  loginUser: (token) => {
    AppHistory.push('/');
    localStorage.setItem('token', token);
    AppDispatcher.dispatch({
      actionType: ACTIONS.LOGIN_USER,
      token: token
    });
  }
}
