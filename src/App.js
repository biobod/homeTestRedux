import React from 'react';
import { Link } from 'react-router'

const App = () => (
  <div>
    <div id="registerField">
      <h3>Please register</h3>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
    <br />
    <div id="loginField">
      <h3>Please login</h3>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  </div>
)

export default App
