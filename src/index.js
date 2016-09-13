import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import {App, Login} from './App';
import { createStore } from 'redux'
import {users, popUpShown} from './reducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  users,
  popUpShown
})

const store = createStore(allReducers)

const dispatch = action => {
  store.dispatch(action)
}

const reduxRender = () => {
  ReactDOM.render(
    <App allStates={store.getState()}
            dispatch = {dispatch} />,
    document.getElementById('root')
  )
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={()=>(<App allStates={store.getState()} dispatch ={dispatch} />)} />
    <Route path="/login" component={Login} />
  </Router>
), document.getElementById('root'))


store.subscribe(reduxRender)