import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      registerTitle: false,
      newUserRegister: false,
      loginTitle: false
    }
  }

  registerUser = (login, password) => ({
    type: 'REGISTER_USER',
    login,
    password,
  })

  showAll = (filter) => ({
    type: 'SHOW_ALL',
    filter
  })

  onSubmitRegister = (event) =>{
    event.preventDefault()
    const {props:{
      dispatch,
      allStates
    },
    state:{registerTitle},
    refs:{registerHolder},
    registerUser
    } = this
    const reg = registerUser(registerHolder.login.value, registerHolder.password.value)
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

    if(allStates.registerUser.length === 0){
      alert("Sorry, you are not registered")
    }
    for(let i of allStates.registerUser) {
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
    const {showAll} = this
     dispatch(showAll(allStates.showPop))
    if(allStates.showPop){
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

    );
  }
}

export default App;
