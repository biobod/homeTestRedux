import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'
import actions from './actions'

class Inputs extends Component {
  hideStyle = {
    display: 'none'
  }
  showStyle = {
    display: 'block',
    margin: 10 + 'px'
  }

  render() {
    const {
      hideStyle,
      showStyle,
      props:{ login }
    } = this
    return (
      <div>
        <input type="text" name="login" placeholder="login" style={ login ? hideStyle : showStyle} />
        <input type="text" name="password" placeholder="password" style={ login ? hideStyle : showStyle} />
        <button type="submit">{!login ? 'Login' : 'Logout'}</button>
      </div>
    )
  }
}

class Login extends Component {

  onSubmitLogin = event => {
    event.preventDefault()

    const {
      refs:{ loginHolder },
      props:{
        login: stateLogin,
        users, loginAction
      }
    } = this

    const login = loginHolder.login.value
    const password = loginHolder.password.value

    loginHolder.login.value = ''
    loginHolder.password.value = ''

    if (users.length === 0) {
      alert("Sorry, you are not registered")
      return
    }

    let isUserFound = users.find(({ login: userLogin, password: userPassword }) => login === userLogin && password === userPassword)

    if (stateLogin) {
      return loginAction(false)
    }

    if (isUserFound) {
      loginAction(true)
    } else {
      alert("Sorry, your login or password wrong")
    }
  }

  render() {
    const {
      onSubmitLogin,
      props:{ login }
    } = this
    return (
      <div>
        <h3>{login ? 'Glad to see you' : 'Please login'}</h3>
        <form
          onSubmit={onSubmitLogin}
          ref="loginHolder"
        >
          <Inputs login={login} />
          <br />
          <br />
          <Link to="/">
            <button>Main page</button>
          </Link>
        </form>
      </div>
    )
  }
}

const connectedLogin = connect(state => ({
    login: state.login,
    users: state.users
  }),
  { loginAction: actions.login }
)(Login)

export default connectedLogin
