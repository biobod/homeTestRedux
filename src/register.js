import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerTitle: false,
      newUserRegister: false,

    }
  }
    onSubmitRegister = (event) => {
      event.preventDefault()
      const {
        state:{
          registerTitle,
          newUserRegister
        },
        refs:{registerHolder},
        props:{users,
        register}
      } = this
      this.setState({registerTitle: true})
      this.setState({newUserRegister: true})
      register(registerHolder.login.value, registerHolder.password.value)
      registerHolder.login.value = ''
      registerHolder.password.value = ''
      browserHistory.push('/login')

    }
    render()
    {
      const {
        props:{s},
        state:{
          registerTitle,
          newUserRegister
        },
        onSubmitRegister
      } = this
      return (
        <div id="registerField">
          <h3>{!registerTitle ? 'Please register' : 'Welcome'}</h3>
          <form onSubmit={onSubmitRegister} ref='registerHolder'>
            <input type="text" name="login" placeholder="login" required/>
            <input type="text" name="password" placeholder="password" required/>
              <button type="submit">{!newUserRegister ? 'Register' : 'Register new user?'}</button>
          </form>
        </div>
      )
    }
  }

const connectedRegister= connect(state => ({ users: state.users }), { register: (login, password) => ({
  type: 'REGISTER_USER',
  login,
  password,
}) })(Register)

export default connectedRegister