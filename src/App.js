import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends Component{
  render(){
    const s = this.props
    return (
   <div>
     <div id="registerField">
       <h3>Please register</h3>
         <Link to="/register">
           <button>Register</button>
         </Link>
     </div>
       <br/>
     <div id="loginField">
       <h3>Please login</h3>
       <Link to="/login">
         <button>Login</button>
       </Link>
     </div>
   </div>
    )
  }
}

const connectedApp = connect(state => ({ s: state }), {})(App)

export default connectedApp