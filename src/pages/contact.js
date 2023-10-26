import React, { useEffect, useState } from 'react'
import '../App.css';
import './contact.css'
// import { Link } from 'react-router-dom';
import construction from './construction-icon-38955.png'



function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // useEffect(function (){
  //   console.log(name)
  //   console.log(email)
  //   console.log(message)
  // },[email,name,message])

  return (
    <div className='Login'>
        {/* <div className='signInPallet'> */}
          <h1>Contact Us</h1>
            <p>Let's get to know you. Feel Free to Reach us 24/7</p>          
            {/* <img src={construction} style={{width: '150px', alignSelf: 'center'}} alt="" /> */}
            <div className="contactPallet">
              <div className='contactDetails'>
                <h2>Email</h2>
                <p>info@handy.com</p>
                <br />
                <h2>Contact</h2>
                <p>+233 305 500 554 ||+233 305 500 554</p>
                <br />
                <h2>Head Office</h2>
                <p>Ashongman Estate, Atomic Hill Street</p>


              </div>
              <div className='sendMessage' >
                <h3>Send us a message</h3>
                <form action="">
                  <h4>Name</h4>
                  <input type="text" name="email" id="email" placeholder='John Doe' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <h4>Email</h4>
                  <input type="email" name="email" id="email" placeholder='me@something.com'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <h4>Message</h4>
                  <textarea type="text" name="message" id="message" placeholder='I need assisstance on how to  ...'
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  />
                </form>
              </div>
            </div>
          
       
    </div>
  )
}

export default Contact