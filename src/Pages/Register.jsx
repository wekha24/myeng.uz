import React, {useState, useRef} from 'react'
import '../Style/Login.css'
import axios from 'axios';


function Register() {
  const username_id = useRef();
  const email_id = useRef()
  const password_id = useRef();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    await e.preventDefault()
    axios.post('https://62c69ecf2b03e73a58d225ce.mockapi.io/signup', data)
    .then((res) => {
      window.location = '/admin/users'
    })
  }
  return (
    <section className="login">
            <div className="loginContainer">
                <div className="btnContainer">

                        <form onSubmit={handleSubmit}>
                        <h1 className="title">Register</h1>
                        <label>Username</label>
                         <input 
                         type="text"
                         autoFocus 
                         required 
                         id="username"
                         name="username"
                         label="Username"
                         ref={username_id}
                         onChange={event => setData({
                         ...data,
                         username: event.target.value
                         })}
                         value={data.username}
                         />
                         <label>Email</label>
                         <input 
                         type="email" 
                         required 
                         id="email"
                         name="email"
                         label="Email"
                         ref={email_id}
                         onChange={event => setData({
                         ...data,
                         email: event.target.value
                         })}
                         value={data.email}
                         />
                         <label>Password</label>
                         <input 
                         type="password" 
                         required 
                         id="password"
                         name="password"
                         label="Password"
                         ref={password_id}
                         onChange={event => setData({
                         ...data,
                         password: event.target.value
                         })}
                         value={data.password}
                         />
                         {/* <p className="errorMsg">{passwordError}</p> */}
                        <input type="submit" className='button' />
                        <p>
                            Don't have accaunt ?
                            <a href='/login'>Sign in</a>
                        </p>
                        </form>
 

                </div>
            </div>
    </section>
  )
}

export default Register