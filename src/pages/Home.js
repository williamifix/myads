import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import roundedDownArrow from './rounded-down.png'
import producrImage from './download.jpeg'


function Home() {
 const [searchValue, setSearchValue]= useState('')
  const [isCategoryListingVisible, setCategoryListingVisibility] = useState(true);

  const toggleCategoryListing = () => {
    setCategoryListingVisibility(!isCategoryListingVisible);
    if(isCategoryListingVisible){
      document.querySelector('.categoryListing span ').style.transform = 'rotate(180deg)'
    }
    else{
      document.querySelector('.categoryListing span').style.transform = 'rotate(360deg)'

    }

  };

 
const [adsCount, setAdsCount] = useState(898);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAdsCount((prevAdsCount) => prevAdsCount + parseInt(10 * Math.random()) );
    }, 1000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  const handleSearch=(e)=> {
    e.preventDefault()
    const targetPosition = document.querySelector('.homePallet').offsetHeight -50;
    console.log(targetPosition+'hello')
    window.scrollTo({
       top: targetPosition,
       behavior: 'smooth'
    },
    
    );

    if(searchValue){
      document.querySelector('.lastestListing h2').innerHTML=('Results For '+ searchValue )
    }
    else{
      document.querySelector('.lastestListing h2').innerHTML=('Latest Listings' )

    }
    setCategoryListingVisibility(true)
 }



  return (
    <div className='homeContainer'>
        <div className='homePallet'>
            <div className="overlay"></div>
            <div className="homeFeatures">
                <h1>HANDY B & S</h1>
                <h3 style={{textAlign: "center", color: "orange", marginBottom: '1rem', fontSize:'1.3rem'}}>  <h2  style={{display: 'inline', color: 'white', fontSize: '30px'}}>{adsCount}+</h2> CLASSIFIED ADS ONLINE</h3>
                {/* <div className="searchBar">
                    <input type="text" placeholder='Enter your search' 
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <h4 style={{color: 'white'}} onClick={handleSearch}>search</h4>
                </div> */}
                <form className="">
                    <input required autoComplete='yes' type="text" placeholder='Enter your search' 
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <button type='submit' style={{color: 'white'}} onClick={handleSearch}>search</button>
                </form>
            </div>
        </div>
        <div className='Home'>
        <div className='categoryListing'style={{height: isCategoryListingVisible? '3rem': '10.3rem'}} >
          <div className='heading'onClick={toggleCategoryListing}>
          <h3>Browse Listing by Category</h3>
          <span id='browseListingToggleIcon'><img src={roundedDownArrow} alt="" /></span>
          </div>

          <div className="category">
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
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
          <LatestListing/>
          <div className='aboutUs'>
            <h1>who we are?</h1>
            <div className="aboutwho">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus placeat voluptates reiciendis! Recusandae natus impedit culpa nobis odit repudiandae repellat itaque aliquid qui saepe magni et, non tempora nesciunt voluptate sunt vitae magnam sint quaerat expedita architecto eius cum?</p>
              <div className='shape circle'><div className='aboutImageOne'></div></div>
            </div>

            <h1>what we do for you?</h1>
            <div className="aboutwhat">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus placeat voluptates reiciendis! Recusandae natus impedit culpa nobis odit repudiandae repellat itaque aliquid qui saepe magni et, non tempora nesciunt voluptate sunt vitae magnam sint quaerat expedita architecto eius cum?</p>
              <div className='shape triangle'><div className='aboutImageTwo'></div></div>
            </div>

            <h1>How we do Our Magic?</h1>
            <div className="abouthow">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus placeat voluptates reiciendis! Recusandae natus impedit culpa nobis odit repudiandae repellat itaque aliquid qui saepe magni et, non tempora nesciunt voluptate sunt vitae magnam sint quaerat expedita architecto eius cum?</p>
              <div className='shape sqaure'><div className='aboutImageThree'></div></div>
            </div>

          </div>
          {/* <SiteNotice/> */}

        </div>
    </div>
   
  )
}



// export function CategoryListing(){
//     return(
//       <div className='categoryListing'>
//         <h3>Browse Listing by Category</h3>
//          <div className="category">
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
//           <CardItem/>
          
//          </div>
//           <div className="sideInfo">
//             <p>something is also here</p>
//           </div>
//       </div>
//     )
//   }
  
  export function CardItem(){
    return(
      
      <div className='cardItem'>
        
        <div className="categoryImage">Ads</div>
        <p>Cartegory</p>
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
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          
          <button className='button'>view more </button>
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
          <img src={producrImage} alt={"picture of ........."+item.name} />
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
  

export default Home
