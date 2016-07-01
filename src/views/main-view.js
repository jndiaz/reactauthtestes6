import React from 'react';
import { Router, RouteHandler } from 'react-router'

import HeaderView from './header-view';
import FooterView from './footer-view';

export default class MainView extends React.Component {
  render(){
    return(
      <div className="container">
        <HeaderView />
        {this.props.children}
        <FooterView />
      </div>
    );
  }
}
