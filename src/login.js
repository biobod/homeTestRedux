import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Field, reduxForm, reset } from 'redux-form'

import actions from './actions'




class LoginForm extends Component{

  onSubmitLogin = ({login, password}) => {
    const {
      props:{
        login: stateLogin,
        users, loginAction,
        resetForm}
    } = this

    resetForm('loginform')

    if (users.length === 0) {
      alert("Sorry, you are not registered")
      return
    }

    let isUserFound = users.find(
      ({ login: userLogin, password: userPassword }) =>login === userLogin && password === userPassword)

    if (stateLogin) {
      return loginAction(false)
    }

    if (isUserFound) {
      loginAction(true)
    } else {
      alert("Sorry, your login or password wrong")
    }
  }

  render(){
    const {
    onSubmitLogin,
    props:{
      handleSubmit,
      submitting,
      login }
    }=this
    return (
      <div>
        <h3>{login ? 'Glad to see you' : 'Please login'}</h3>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          {!login && <Field type="text" component="input" name="login" placeholder="login" />}
          {!login && <Field type="text"  component="input" name="password" placeholder="password"  />}
          <button type={submitting}>{!login ? 'Login' : 'Logout'}</button>
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

const Login = reduxForm({
  form: 'loginform'
})(LoginForm);

const connectedLogin = connect(state => ({
    login: state.login,
    users: state.users
  }),
  { loginAction: actions.login,
    resetForm: reset}
)(Login)

export default connectedLogin
