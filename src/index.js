import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import {registerUser, loginUser, showPop} from './reducer'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
  registerUser,
  loginUser,
  showPop
})

const store = createStore(allReducers)

const dispatch = action => {
  store.dispatch(action)
}


const render = () => {
  ReactDOM.render(
    <App
      registerText={store.getState()}
      loginText="Please login"
      dispatch = {dispatch}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)