import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'



export function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  useEffect(() => {
    const navList = document.querySelector('#navList');

    const handleResize = () => {
      if (window.innerWidth > 696) {
        navList.style.display = 'flex';
      } else {
        navList.style.display = 'none';
        setNavVisibility(false)
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className="navbar">
      <div className="nav">
        <h2 id='logo'>LOGO</h2>
        <div className={isNavVisible ? 'hideMenu' : 'showMenu'} onClick={toggleNav}>
          <div className='top'></div>
          <div className='middle'></div>
          <div className='bottom'></div>
        </div>
        <ul id='navList' style={{ display: isNavVisible ? 'flex' : 'none' }}>
          <li><NavLink to="/" className='link '>Home</NavLink></li>
          <li><NavLink to="/Dashboard" className='link '>Dashboard</NavLink></li>
          <li><NavLink to="/Login" className='link '>Login</NavLink></li>
          <li><NavLink to="/Register" className='link '>Register</NavLink></li>
          <li><button>Create Listing</button></li>
        </ul>
      </div>
    </div>
  );
}




// export function ContentLoader (){
//   return (
//     <main className='contentLoader'>
//           <Routes>
//             <Route path='/' element={<Home/>} />
//             <Route path='/login' element={<Login />} />
//             <Route path='/register' element={<Register />} />
//           </Routes>
      
//     </main>


//   )
// }



export function CategoryListing(){
  return(
    <div className='categoryListing'>
      <h2>Browse Listing by Category</h2>
       <div className="category">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
       </div>

    </div>
  )
}

export function CardItem(){
  return(
    
    <div className='cardItem'>
      <h3>Card Name</h3>
      <p>Lorem ipsum, dolor si reiciendis reprehenderit, eligendi magni.</p>
      <div className="categoryImage"></div>
    </div>
  )
}


export function Footer(){
  return (
    <div className="foot">
      <div className="footerCategories">
        <div className='about'>
          <h3>ABOUT US</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className='contact'>
          <h3>CONTACT & SITEMAP</h3>
          <ul>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className='account'>
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
    </div>
    <hr />
    <p style={{paddingBottom: "20px"}}>&copy; 2023 ADS. All rights reserved</p>
    </div>

  )
}


export function LatestListing (){
  return (
    <div className="lastestListing">
      <h2>Latest Listings</h2>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <button>view more </button>
    </div>
  )
}
const item ={
  id: 23,
  name: 'Natural Products for Stomach Ulcer',
  description: "Health & Beauty: Health and herbal medicine for sale in Accra" ,
  price: 'GHS' + 450,
  rating: 5,
  img: ".../asset/images/download.jpeg",

}

export function ListItem(){
  return(
     
      <div className="item">
      <div className="imgContainer">
        <img src={item.img} alt={"picture of ........."+item.name} />
      </div>
      <div className="itemDetails">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
        <p>Rating: {item.rating}</p>
      </div>
    </div>
  )
}


const components = () => {
  return (
   <div>
    <Navbar/>
    <categoryListing/>
    <LatestListing/>
    <Footer/>
   </div>
  )
}


export default components;


