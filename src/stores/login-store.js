import BaseStore from 'src/stores/base-store';
import AppDispatcher from 'src/dispatchers/app-dispatcher';
import ACTIONS from 'src/constants/actions';
import jwt from 'jsonwebtoken';

class LoginStore extends BaseStore {

  constructor(){
    super();
    this._dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
    this._user = null;
    this._token = null;
  }

  _registerToActions(action) {
    switch (action.actionType) {
      case ACTIONS.LOGIN_USER:
        this._token = action.token;
        this._user = jwt.decode(this._token);
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get user(){
    return this._user;
  }

  get token(){
    return this._token;
  }

  isLoggedIn(){
    return !!this._user;
  }

};

export default new LoginStore();
