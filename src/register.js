import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import actions from './actions'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      registerTitle: false
    }
  }

  onSubmitRegister = (event) => {
    event.preventDefault()
    const {
      refs:{registerHolder},
      props:{s,
      register,
      loginAction}
    } = this
    this.setState({registerTitle: true})
      register(registerHolder.login.value, registerHolder.password.value)
      registerHolder.login.value = ''
      registerHolder.password.value = ''
      loginAction(false)
      browserHistory.push('/login')
  }

  render(){
  const {
    onSubmitRegister,
    props:{s},
    state:{registerTitle}
    } = this
  return(
    <div id="registerField">
      <h3>{!registerTitle ? 'Please register' : 'Welcome'}</h3>
      <form onSubmit={onSubmitRegister} ref='registerHolder'>
        <input type="text" name="login" placeholder="login" required/>
        <input type="text" name="password" placeholder="password" required/>
          <button type="submit">Register</button>
      </form>
    </div>
    )
  }
}

const connectedRegister = connect(state => ({ s: state }),{
  register: actions.register,
  loginAction: actions.login
})(Register)

export default connectedRegister