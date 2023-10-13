import React from 'react'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import { Navbar,Footer } from './components'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'



function Layout() {
  return (
   <Router>
    <div className='layout'>    
        {/* navigation bar in the layout component   */}
        <Navbar/>

        {/* random sections of the app would be loaded here upon request */}
        <main className='contentLoader'>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

                {/* <Route path='/' exact Component={Home}/>
                <Route path='/login' exact Component={Login}/>
                <Route path='/register' exact Component={Register}/> */}
            </Routes>
        </main>




    {/* footer section of the layout component */}
    <Footer/>

    </div>
   </Router>
  )
}

export default Layout