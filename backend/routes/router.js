const express = require('express')
const router = express.Router()
const User = require('../modules/schemas')

router.post('/register', (req, res) => {
    const { firstName, lastName, email, phone, password, confirmPassword, businessName, businessLocation } = req.body;
    console.log('New application received = ' + firstName + ' | ' + lastName);
  
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      businessName,
      businessLocation,
    });
  
    newUser.save()
      .then(() => {
        console.log('User registered successfully');
        res.status(201).json({ 
            message: 'User registered successfully',
            status: 'success'
        });
      })
      .catch(error => {
        console.error('Registration failed:', error);
        res.status(500).json({ error: 'Registration failed' });
      });
  });
  

router.post('/login', (req,res)=>{
    console.log('user login data recieved successfully');
    console.log(req.body)
    
    res.status(200).json({
        message: 'user logged in successfully',
    })
})




  module.exports = router;