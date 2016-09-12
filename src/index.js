import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import {registerUser, loginUser, showPop} from './reducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  registerUser,
  showPop
})

const store = createStore(allReducers)

const dispatch = action => {
  store.dispatch(action)
}


const render = () => {
  ReactDOM.render(
    <App
      allStates={store.getState()}
      dispatch = {dispatch}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)