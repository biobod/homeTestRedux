import React, { PropTypes, Component, cloneElement } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { App } from './App'

const BohdanRouter = ({ state, dispatch }) => (
  <Router history={browserHistory} dispatch={dispatch}>
    <Route path='/' component={() => <App state="1" />} />
  </Router>
)

BohdanRouter.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default BohdanRouter
