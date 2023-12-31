import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import logo from '../pages/handyLogo.png'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Login from '../pages/Login'
// import Home from '../pages/Home'
// import Register from '../pages/Register'
// import Dashboard from '../pages/Dashboard'




export function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  useEffect(() => {
    const navList = document.querySelector('#navList');

    const handleResize = () => {
      if (window.innerWidth > 730) {
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






    function hideNavRefresh(){
      if ((window.innerWidth <= 730)&&(isNavVisible)) {
          setNavVisibility(false)      
        }
        scrollToTop();
      }






function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth',

  });
}

  return (
    <div className="navbar">
      <div className="nav">
        {/* <h2 id='logo'>LOGO</h2> */}
        <img src={logo} alt="" id='logo'/>
        <div className={isNavVisible ? 'hideMenu' : 'showMenu'} onClick={toggleNav}>
          <div className='top'></div>
          <div className='middle'></div>
          <div className='bottom'></div>
        </div>
        <ul id='navList' style={{ display: isNavVisible ? 'flex' : 'none' }}>
          <li><NavLink to="/" className='link ' onClick={hideNavRefresh}>Home</NavLink></li>
          <li><NavLink to="/Dashboard" className='link ' onClick={hideNavRefresh}>Dashboard</NavLink></li>
          <li><NavLink to="/Pricing" className='link ' onClick={hideNavRefresh}>Pricing</NavLink></li>
          <li><NavLink to="/Login" className='link ' onClick={hideNavRefresh}>Login</NavLink></li>
          <li><NavLink to="/Register" className='link ' onClick={hideNavRefresh}>Register</NavLink></li>
          <li><NavLink to="/CreateListing" onClick={hideNavRefresh}><button>Create Listing</button></NavLink></li>
        </ul>
      </div>
    </div>
  );
}






// export function CategoryListing(){
//   return(
//     <div className='categoryListing'>
//       <h2>Browse Listing by Category</h2>
//        <div className="category">
//         <CardItem/>
//         <CardItem/>
//         <CardItem/>
//         <CardItem/>
//         <CardItem/>
//         <CardItem/>
//         <CardItem/>
//         <CardItem/>
//        </div>

//     </div>
//   )
// }

// export function CardItem(){
//   return(
    
//     <div className='cardItem'>
//       <h3>Card Name</h3>
//       <p>Lorem ipsum, dolor si reiciendis reprehenderit, eligendi magni.</p>
//       <div className="categoryImage"></div>
//     </div>
//   )
// }


export function Footer(){
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  
    });
  }
  return (
    <div className="foot">
      <div className="footerCategories">
        <div className='about'>
          <h3>ABOUT US</h3>
          <ul>
            <li><NavLink to="/TermsNConditions" className='link ' onClick={scrollToTop} >Terms & Condition</NavLink></li>
            <li><NavLink to="/privacy" className='link ' onClick={scrollToTop}>Privacy</NavLink></li>
            {/* <li>Terms & Conditions</li>
            <li>Privacy</li> */}
          </ul>
        </div>
        <div className='contact'>
          <h3>CONTACT & SITEMAP</h3>
          <ul>
            <li><NavLink to="/contact" className='link ' onClick={scrollToTop}>Contact us</NavLink></li>
            <li><NavLink to="/sitemap" className='link ' onClick={scrollToTop}>Site MAP</NavLink></li>
            {/* <li>Contact Us</li>
            <li>Sitemap</li> */}
          </ul>
        </div>
        <div className='account'>
          <h3>FOLLOW US</h3>
          <ul>
            <li>LinkedIn</li>
            <li>X</li>
            <li>Instagram</li>
            <li>Twitter</li>
            {/* <li>Telegram</li> */}
          </ul>
        </div>
        <div className='account'>
          <h3>MY ACCOUNT</h3>
          <ul>
            <li><NavLink to="/Login" className='link ' onClick={scrollToTop}>Login</NavLink></li>
            <li><NavLink to="/Register" className='link 'onClick={scrollToTop}>Register</NavLink></li>
            {/* <li>Login</li>
            <li>Sign Up</li> */}
          </ul>
        </div>
    </div>
    <hr />
    <p style={{paddingBottom: "15px", textAlign: 'center', fontSize: '12px', paddingTop: '5px'}}>&copy; 2023 ADS. All rights reserved . Designed by <em href='#' style={{color: 'orange', cursor:'pointer'}}>iFiX WEB TECH</em></p>
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

export function SiteNotice(){
  return(
    <div className="siteNotice">
      <div>
      <h3>Buy & Sell your products and services on HANDY</h3>
      <p>
          Looking for a one-stop marketplace to buy, sell, rent, or discover used electronics, furniture, cars, movies, books, fashion, real estate, services, jobs, events , and more? Welcome to ADS, the largest collection of free classified ads in Ghana!
          With ADS, you get free user-to-user classified ads in all major cities. Post your ad at zero cost and explore an extensive selection of free classifieds. Your ad will reach a massive audience, and guess what? You can even upload captivating pictures or add a link to your website!
          Whether you're a pro or an individual, ADS is your gateway to incredible deals! From used cars to trendy fashion, mobile phones to elegant furniture - it's all here. Embrace the power of ADS today and make the best deals in town!
      </p>
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
    <SiteNotice/>
   </div>
  )
}


export default components;


