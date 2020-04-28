import React, { useState } from "react";
import { connect } from 'react-redux'; 

import {postLogin} from '../actions/loginActions.js' 


const Login =(props) => {
  //const [user, setUser]=useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(username)
    console.log(password)
    const inputtedUser={
        username: username,
        password: password,
    }
    //setUser(inputtedUser)
    props.postLogin(inputtedUser)
    console.log(inputtedUser)
  }
  
  return (
    <div style={{width: '100%'}}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={function(event){setUsername(event.target.value)}}
          />
          <label>Password</label>
          <input
            value={password}
            onChange={function(event){setPassword(event.target.value)}}
            type="password"
          />
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

//data from reducer
const mapStateToProps = state => {
  return {

    loginData: state.loginReducer
  };
};

export default connect(
mapStateToProps,
{postLogin}
)(Login)