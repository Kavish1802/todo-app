import React from 'react'
import './style.css';
import { useState } from 'react';

function Login() {
    const [islogin, setLogin] = useState(true);
    const [issignup, setSignup] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
    }
  return (
    <div className='loginpage'>
    <h2>Already a user? 
    <button onClick={()=>{
        setLogin(!islogin)
        setSignup(false)}}>Login</button>
    </h2>
    
    <h2>
    New user?
    <button onClick={()=>{setSignup(!issignup)
    setLogin(false)}}>Sign up</button>  
    </h2>
     
    {islogin&&<form onSubmit={handleSubmit}>
        <label>
            Email-id:  
            <input type="text" name="email" />
        </label>
        <br />
        <label>
            Password:
            <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
    </form>}
    {issignup&&<form onSubmit={handleSubmit}>
        <label>
           Name:
              <input type="text" name="name" />
        </label>
        <br />
        <label>
            Email-id:
            <input type="text" name="email" />
        </label>
        <br />
        <label>
            Password:
            <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
    </form>}

    </div>
  )
}

export default Login
