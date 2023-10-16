import React from 'react'
import '../App.css';
// import { Link } from 'react-router-dom';
import construction from './construction-icon-38955.png'



function TermsNConditions() {
  return (
    <div className='Login'>
        <div className='signInPallet'>
            <h1>Terms and Conditions</h1>
            <p>NAVIGATE CAREFULLY. MEN AT WORK</p>          
            <img src={construction} style={{width: '150px', alignSelf: 'center'}} alt="" />
        </div>
       
    </div>
  )
}

export default TermsNConditions