import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import connectApp from './App';
import connectLogin from './login';
import connectRegister from './register';
import { createStore } from 'redux'
import {users} from './reducer'
import {combineReducers} from 'redux'
import { Provider } from 'react-redux'

const allReducers = combineReducers({
  users
})

const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension())


ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={connectApp} />
        <Route path="/login" component={connectLogin} />
        <Route path="/register" component={connectRegister} />
      </Router>
    </Provider>,
    document.getElementById('root')
)



