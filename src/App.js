import React, { Component } from 'react';


class App extends Component {

  registerUser = (login, password) => ({
    type: 'REGISTER_USER',
    action: true,
    login,
    password,

  })

  loginUser = (login, password) =>({
    type: 'LOGIN_USER',
    login,
    password
  })
  showAll = (filter) => ({
    type: 'SHOW_ALL',
    filter
  })


  onSubmitRegister = (event) =>{
    event.preventDefault()
    const {props:{
      dispatch,
      registerText
    },
    refs:{registerHolder}
    } = this
    const {registerUser} = this
    const reg = registerUser(registerHolder.login.value, registerHolder.password.value)
    registerHolder.login.value = ''
    registerHolder.password.value = ''
    dispatch(reg)
    console.info(registerText.showPop)

  }
  onSubmitLogin = (event) =>{
    event.preventDefault()
    const {props:{
      dispatch
    },
      refs:{loginHolder}
    } = this
    const {registerUser} = this
    const reg = registerUser(loginHolder.login.value, loginHolder.password.value)
    loginHolder.login.value = ''
    loginHolder.password.value = ''
    dispatch(reg)

  }
  showAllElement = () =>{
    const {dispatch,
      registerText} = this.props
    const {showAll} = this

     dispatch(showAll(registerText.showPop))
    if(registerText.showPop){
       alert("DDD")
    }
  }


  render() {
    const {
      props:{
      registerText,
      loginText
    },
    onSubmitRegister,
    onSubmitLogin,
    showAllElement
   } = this
    return (
   <div>
       <div id="registerField">
       <h3>d</h3>
       <form onSubmit={onSubmitRegister} ref='registerHolder'>
       <input type="text" name="login" placeholder="login"/>
       <input type="text" name="password" placeholder="password"/>
       <button type="submit">Register</button>
     </form>
     </div>
       <br/>
     <div id="loginField">
       <h3>{loginText}</h3>
       <form onSubmit={onSubmitLogin} ref="loginHolder">
         <input type="text" name="login" placeholder="login"/>
         <input type="text" name="password" placeholder="password"/>
         <button type="submit">Login</button>
       </form>
     </div>
     <br/>
     <br/>
     <br/>
     <div id="somePopup">
       <button onClick={showAllElement}>Show great picture</button>
     </div>
   </div>

    );
  }
}

export default App;
