import React, { Component, cloneElement } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      registerTitle: false,
      newUserRegister: false,
      loginTitle: false
    }
  }

  users = (login, password) => ({
    type: 'REGISTER_USER',
    login,
    password,
  })

  popUpShown = (filter) => ({
    type: 'SHOW_ALL',
    filter
  })

  onSubmitRegister = (event) =>{
    event.preventDefault()
    const {users,
    state:{registerTitle},
    refs:{registerHolder},
    props:{dispatch,
      allStates}
    } = this
    console.info(allStates)
    const reg = users(registerHolder.login.value, registerHolder.password.value)
    registerHolder.login.value = ''
    registerHolder.password.value = ''
    dispatch(reg)
    this.setState({registerTitle: true})
    this.setState({newUserRegister: true})

  }

  onSubmitLogin = (event) => {
    event.preventDefault()
    const {props:{allStates},
      state:{loginTitle},
      refs:{loginHolder}
    } = this
    const login = loginHolder.login.value
    const password = loginHolder.password.value

    if(allStates.users.length === 0){
      alert("Sorry, you are not registered")
    }
    for(let i of allStates.users) {
      if (login === i.login && password === i.password) {
        this.setState({loginTitle: !loginTitle})
      } else {alert("Sorry, you are not registered")}
    }
    loginHolder.login.value = ''
    loginHolder.password.value = ''
  }

  showAlert = () =>{
    const {dispatch,
      allStates} = this.props
    const {popUpShown} = this
     dispatch(popUpShown(allStates.popUpShown))
    if(allStates.popUpShown){
       alert("Show beautiful picture ")
    }
  }

  render() {

    const {
    props:{allStates},
    state:{registerTitle,
    loginTitle,
    newUserRegister},
    onSubmitRegister,
    onSubmitLogin,
    showAlert
   } = this
    return (
   <div>
       <div id="registerField">
       <h3>{!registerTitle ? 'Please register' : 'Welcome'}</h3>
       <form onSubmit={onSubmitRegister} ref='registerHolder'>
       <input type="text" name="login" placeholder="login" required/>
       <input type="text" name="password" placeholder="password" required/>
       <button type="submit">{!newUserRegister ? 'Register' : 'Register new user?'}</button>
     </form>
     </div>
       <br/>
     <div id="loginField">
       <h3>{!loginTitle ? 'Please login' : 'Glad to see you again'}</h3>
       <form onSubmit={onSubmitLogin} ref="loginHolder">
         <input type="text" name="login" placeholder="login" required />
         <input type="text" name="password" placeholder="password" required />
         <button type="submit">Login</button>
       </form>
     </div>
     <br/>
     <br/>
     <br/>
     <div id="somePopup">
       <button onClick={showAlert}>Show a great picture</button>
     </div>
   </div>
    )
  }
}


class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loginTitle: false
    }
  }
  onSubmitLogin = (event) => {
    event.preventDefault()
    const {props:{allStates},
      state:{loginTitle},
      refs:{loginHolder}
    } = this
    const login = loginHolder.login.value
    const password = loginHolder.password.value
    console.info(allStates)

    if(allStates.users.length === 0){
      alert("Sorry, you are not registered")
    }
    for(let i of allStates.users) {
      if (login === i.login && password === i.password) {
        this.setState({loginTitle: !loginTitle})
      } else {alert("Sorry, you are not registered")}
    }
    loginHolder.login.value = ''
    loginHolder.password.value = ''
  }

  render(){
    const {
      state:{loginTitle},
      onSubmitLogin,
    } = this
    return (
        <div id="loginField">
          <h3>{!loginTitle ? 'Please login' : 'Glad to see you again'}</h3>
          <form onSubmit={onSubmitLogin} ref="loginHolder">
            <input type="text" name="login" placeholder="login" required />
            <input type="text" name="password" placeholder="password" required />
            <button type="submit">Login</button>
          </form>
        </div>
    )
  }
}

class Bohdan extends Component{
  render(){
    const {allStates, dispatch} = this.props

    return(

      <Router history={browserHistory} allStates = {allStates} dispatch ={dispatch}>
      <Route path='/' component={cloneElement(App, {allStates:allStates, dispatch:dispatch})} />
      </Router>
    )
  }
}

export {App}
export {Login}
export {Bohdan}
