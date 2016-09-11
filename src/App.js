import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
   <div>
       <div id="registerField">
       <h3>Please register</h3>
       <form>
       <input type="text" placeholder="login"/>
       <input type="text" placeholder="password"/>
       <button>Register</button>
     </form>
     </div>
       <br/>
     <div id="loginField">
       <h3>Please login</h3>
       <form>
         <input type="text" placeholder="login"/>
         <input type="text" placeholder="password"/>
         <button>Login</button>
       </form>
     </div>
     <br/>
     <br/>
     <br/>
     <div id="somePopup">
       <button>Show great picture</button>
     </div>
   </div>

    );
  }
}

export default App;
