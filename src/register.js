import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import actions from './actions'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerTitle: false
    }
  }

  onSubmitRegister = (event) => {
    event.preventDefault()
    const {
      refs:{ login, password },
      props:{
        register,
        loginAction
      }
    } = this
    this.setState({ registerTitle: true })

    register(login.value, password.value)

    login.value = ''
    password.value = ''

    loginAction(false)
    browserHistory.push('/login')
  }

  render() {
    const {
      onSubmitRegister,
      state:{ registerTitle }
    } = this
    return (
      <div id="registerField">
        <h3>{registerTitle ? 'Welcome' : 'Please register'}</h3>
        <form onSubmit={onSubmitRegister}>
          <input
            type="text"
            name="login"
            ref="login"
            placeholder="login"
            required
          />

          <input
            type="text"
            name="password"
            ref="password"
            placeholder="password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

const connectedRegister = connect(null, {
  register: actions.register,
  loginAction: actions.login
})(Register)

export default connectedRegister
