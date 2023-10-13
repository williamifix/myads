import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';



function Login() {
  return (
    <div className='Login'>
        <div className='signInPallet'>
          <h1>Login</h1>
          <p>Fill in the required details to Login to your account</p>
          <form action="">
          <input required type="text" placeholder='Enter your Email'/>
          <input required type="password" placeholder='Enter your Password'/>
          <button>Submit</button>
          
        <p >Dont have an account yet?   <Link to="/Register" className='link'>Register</Link></p>
        
        </form>

        </div>
       
    </div>
  )
}

export default Login