import React, { useEffect, useState } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import account from './user.svg'
import Login from './Login';


function Register() {
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [email, setEmail]= useState('')
  const [phone, setPhone]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword,setConfirmPassword]= useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessLocation, setBusinessLocation] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const userData = {
    firstName : firstName,
    lastName: lastName,
    email : email,
    phone: phone,
    password: password,
    businessName: businessName,
    businessLocation : businessLocation

  }

  function resetForm(){
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setPassword('')
    setConfirmPassword('')
    setBusinessName('')
    setBusinessLocation('')
  }



function hideNotice (){
  document.querySelector('.Notice').style.display = 'none'
}






  function Notice(){
   

    if(status === 'success') {
      // console.log(message)
      // console.log(status)
      return(
          <div className='Notice'>
            <div className="hideNotice" onClick={hideNotice}>X</div>
            <div className='container'>
            <div className="Noticelogo">
                <img src={account} alt="" id='successLogo'/>
            </div>
            <p id='successMessage'>{message}</p>
            <Link to='/Login'><button>Login to Begin</button></Link>
            </div>
          </div>
        )
      }else if(status === 'fail'){
        console.log(message)
        return(
          <div className='Notice'>
            <div className="Noticelogo">
                <img src="" alt="" id='noticeLogo'/>
            </div>
            <p id='noticeMessage'>{message}</p>
            <button>Try again</button>
          </div>
        )
      }
   
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(password === confirmPassword){
      postData();
      resetForm();
      // Notice();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    
      });
    }
    else{
      console.log('your passwords do not match. check it again')
    }
  }





  function postData () {
    
  axios.post('http://localhost:4000/register', userData)
  .then((response)=>{
    setMessage(response.data.message)
    setStatus(response.data.status)
    // console.log(response.data)
  })
  .catch((error) => {
    console.error(error)
  })

  }

 useEffect(()=>{
  if(password !=confirmPassword){
    setError('Passwords do not match')
  }
  else{
    setError('')
  }
 },[password, confirmPassword])

 Notice();
  return (

    <div className='Login'>
      <Notice/>
        <div className='signInPallet'>
        <h1>Register</h1>
        <p>Create Your Account. It's 100% FREE</p>
        <form action="" onSubmit={handleSubmit}>

        <h4>Name</h4>
        <input autoFocus autoComplete='on' name='fisrtName' id='firstName'  required type="text" placeholder='Enter your First Name (John)'
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        />

        <input autoComplete='on' name='lastName' id='lastName' required type="text" placeholder='Enter your Last Name (Doe)'
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        />
        <br />
        <h4>Email</h4>
        <input autoComplete='on' name='email' id='email' required type="text" placeholder='Enter your Email (me@something.com)'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />

        <h4>Phone</h4>
        <input autoComplete='on' name='phone' id='phone' required type="text" placeholder='Enter your Phone (+233) 00 000 0000'
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />
        <br />
        <h4>Business Details</h4>
        <input autoComplete='on' name='businessName' id='businessName'  type="text" placeholder='Name of your Business'
          value={businessName}
          onChange={(e)=>setBusinessName(e.target.value)}
        />
    
        <input autoComplete='on' name='businessLocation' id='businessLocation' required type="text" placeholder='Enter Your Business Location'
          value={businessLocation}
          onChange={(e)=>setBusinessLocation(e.target.value)}
        />
      
       
      <br />
        <h4>Password</h4>
        <input  name='password' id='password' required type="password" placeholder='Enter your Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input name='confirmPassword' id='confirmPassword' required type="password" placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />
        <p style={{color: 'red'}}>{error}</p>
        <button type='submit'>Submit</button>

        <p>Already have an account?         <Link to="/Login" className='link'>Login</Link></p>
        </form>
        </div>
       
    </div>
  )
}

export default Register