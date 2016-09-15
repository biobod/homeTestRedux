import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import connectApp from './App';
import connectLogin from './login';
import connectRegister from './register';
import {users, login} from './reducer'

const allReducers = combineReducers({
  users,
  login
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
