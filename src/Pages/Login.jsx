import React, {useState} from 'react'
import '../Style/Login.css'

function Login() {
  
  return (
    <section className="login">
            <div className="loginContainer">
                <div className="btnContainer">

                        <form >
                        <h1 className="title">Login</h1>
                        <label>Username</label>
                         <input 
                         type="text"
                         autoFocus 
                         required 
                         id="email"
                         name="email"
                         label="Email Address"
                         />
                         <label>Password</label>
                         <input 
                         type="password" 
                         required 
                         id="password"
                         name="password"
                         label="Password"
                         />
                         {/* <p className="errorMsg">{passwordError}</p> */}
                        <button type='submit' className='button'>Sign in</button>
                        <p>
                            Don't have accaunt ?
                            <a href='/register'>Sign up</a>
                        </p>
                        </form>
 

                </div>
            </div>
    </section>
  )
}

export default Login