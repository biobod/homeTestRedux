import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import actions from './actions'


class RegisterForm extends Component{

  onclickSubmitForm = ({login, password}) => {
   const {register, loginAction, login:loginState} = this.props
     if(!loginState) {
       register(login, password)
       browserHistory.push('/login')
     }
  }
  goToLogout = ()=> {
    browserHistory.push('/login')
  }
  render() {
    const {
    onclickSubmitForm,
    goToLogout,
    props:{handleSubmit, login,
        submitting}
    }= this

  return(
    <div>
      { !login && <form onSubmit={handleSubmit(onclickSubmitForm)}>
        <div>
          <h3>Please register</h3>
          <Field name="login" component="input" type="text" placeholder="login" required/>
          <Field name="password" component="input" type="text" placeholder="password" required />
        </div>
        <button type="submit" disabled={submitting}>Ok</button>
      </form> }
      { login && <div>
      <h2>Please logout first</h2>
      <button onClick={goToLogout}>Please Logout first</button>
      </div> }
    </div>)
  }
}

const Register = reduxForm({
  form: 'registerForm'
})(RegisterForm);

const connectedRegister = connect(state=>({login: state.login}), {
  register: actions.register,
  loginAction: actions.login
})(Register)

export default connectedRegister