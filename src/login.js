import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loginTitle: false,
      toggleLogin: false
    }
  }
  onSubmitLogin = (event) => {
    event.preventDefault()
    const {props:{s},
      state:{loginTitle,
        toggleLogin},
      refs:{loginHolder}
    } = this
    const login = loginHolder.login.value
    const password = loginHolder.password.value

    if(s.users.length === 0){
      alert("Sorry, you are not registered")
    }
    if(!toggleLogin) {
      for (let i of s.users) {
        if (login === i.login && password === i.password) {
          this.setState({loginTitle: !loginTitle})
          this.setState({toggleLogin: true})
        } else {
          this.setState({loginTitle: false})
          alert("Sorry, login or password wrong")
        }
      }
    }else{browserHistory.push('/')}
    loginHolder.login.value = ''
    loginHolder.password.value = ''
  }

  render(){
    const {
      state:{loginTitle,
      toggleLogin},
      onSubmitLogin,
    } = this
    return (
      <div id="loginField">
        <h3>{!loginTitle ? 'Please login' : 'Glad to see you again'}</h3>
        <form onSubmit={onSubmitLogin} ref="loginHolder">
          <input type="text" name="login" placeholder="login"  />
          <input type="text" name="password" placeholder="password"  />
          <button type="submit">{!toggleLogin ? 'Login' : 'Logout'}</button>
          <br/>
          <br/>
          <Link to="/"><button>Main page</button></Link>
        </form>
      </div>
    )
  }
}

const connectedLogin = connect(state => ({ s: state }),{})(Login)

export default connectedLogin