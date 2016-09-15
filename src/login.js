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
    margin: 10 +'px'
  }

  render() {
    const {
    hideStyle,
    showStyle,
    props:{s}
    } = this
    return(
    <div>
      <input type="text" name="login" placeholder="login" style={ s.login ? hideStyle : showStyle} />
      <input type="text" name="password" placeholder="password" style={ s.login  ? hideStyle : showStyle} />
      <button type="submit">{!s.login  ? 'Login' : 'Logout'}</button>
    </div>
    )
  }
}

class Login extends Component{
  constructor(props) {
    super(props)
  }

  onSubmitLogin = (event) => {
    event.preventDefault()
    let filter = false
    const {
      refs:{loginHolder},
      props:{
      s,
      loginAction
      }
    } = this
    const login = loginHolder.login.value
    const password = loginHolder.password.value

    if(s.users.length === 0){
      alert("Sorry, you are not registered")
    }
    let oddNumber = s.users.find((i) => login === i.login && password === i.password);
    if(!s.login){
      if(oddNumber){
        loginAction(true)
      }
       else{
         alert("Sorry, your login or password wrong")
       }
    }else{
      loginAction(false)
    }
    loginHolder.login.value = ''
    loginHolder.password.value = ''
  }

  render(){
    const {
      onSubmitLogin,
      props:{s}
    } = this
    return (
      <div id="loginField">
        <h3>{!s.login ? 'Please login' : 'Glad to see you'}</h3>
        <form onSubmit={onSubmitLogin} ref="loginHolder">
          <Inputs s ={s} />
          <br/>
          <br/>
          <Link to="/"><button>Main page</button></Link>
        </form>
      </div>
    )
  }
}

const connectedLogin = connect(state => ({ s: state }),{ loginAction: actions.login })(Login)

export default connectedLogin