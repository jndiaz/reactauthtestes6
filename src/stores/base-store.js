import { EventEmitter } from 'events';
import AppDispatcher from 'src/dispatchers/app-dispatcher';

export default class BaseStore extends EventEmitter {

  constructor(){
    super();
  }

  subscribe(actionSubscribe){
    this._dispatchToken = AppDispatcher.register(actionSubscribe());
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  emitChange(){
    this.emit('CHANGE');
  }

  addChangeListener(callBack){
    this.on('CHANGE', callBack);
  }

  removeChangeListener(callBack){
    this.removeListener('CHANGE', callBack);
  }

}
