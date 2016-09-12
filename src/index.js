import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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