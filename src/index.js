import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from '../src/component/Nav';
import About from '../src/component/About';
import store from './store';
import {Provider} from 'react-redux';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Provider>,



  document.getElementById('root')
);


