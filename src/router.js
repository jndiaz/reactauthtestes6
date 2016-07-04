import React from 'react';
import ReactDOM from 'react-dom' ;
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import HomeView from './views/home-view';
import MainView from './views/main-view';
import LoginView from './views/login-view';
import History from './utils/history';

export default class AppRouter {
  constructor(){
    this.routes = (
      <Router history={hashHistory}>
        <Route path="/" component={MainView}>
          <IndexRoute component={HomeView} />
          <Route path="login" component={LoginView} />
        </Route>
      </Router>
    );
  };

  run(mountElement){
    ReactDOM.render(this.routes, mountElement);
  }
};
