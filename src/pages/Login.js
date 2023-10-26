import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';



function Login() {
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('')
  const loginData={
    email: email,
    password: password,
  }
 



  function postData(){
    axios.post('http://localhost:4000/login', loginData)
    .then((response)=>{
      const userData= response.data
      console.log(userData)
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  function resetForm(){
    setEmail('')
    setPassword('')
  }

  function handleSubmit(e){
    e.preventDefault();
    postData();
    resetForm();
  }


  return (
    <div className='Login'>
        <div className='signInPallet'>
          <h1>Login</h1>
          <p>Fill in the required details to Login to your account</p>
          <form action="" onSubmit={handleSubmit}>
          <input required autoComplete='on' autoFocus type="text" name='email' placeholder='Enter your Email'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input required type="password" name='password' placeholder='Enter your Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button>Submit</button>
          
        <p >Dont have an account yet?   <Link to="/Register" className='link'>Register</Link></p>
        
        </form>

        </div>
       
    </div>
  )
}

export default Login