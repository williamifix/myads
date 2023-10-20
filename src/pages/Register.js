import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
// import Login from './Login';

function Register() {
  return (
    <div className='Login'>
        <div className='signInPallet'>
        <h1>Register</h1>
        <p>Create Your Account. It's 100% FREE</p>
        <form action="" >

        <h4>Name</h4>
        <input id='firstName' required type="text" placeholder='Enter your First Name (John)'/>
        <input id='lastName' required type="text" placeholder='Enter your Last Name (Doe)'/>
        
        <h4>Email</h4>
        <input id='email' required type="text" placeholder='Enter your Email (me@something.com)'/>

        <h4>Phone</h4>
        <input id='phone' required type="text" placeholder='Enter your Phone (+233) 00 000 0000'/>

        <h4>Password</h4>
        <input id='password' required type="password" placeholder='Enter your Password'/>
        <input id='confirmPassword' required type="password" placeholder='Confirm Password'/>
        <button>Submit</button>

        <p>Already have an account?         <Link to="/Login" className='link'>Login</Link>
</p>
        </form>
        </div>
       
    </div>
  )
}

export default Register