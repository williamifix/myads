import React from 'react'
import '../App.css';
import './CreateListing.css'
import { Link } from 'react-router-dom';



function CreateListing() {
  return (
    <div className='Login'>
        <div className='signInPallet'>
          <h1>+ New Listing</h1>
          <p>THIS ISTHE LISTING PAGE</p>
          <div className="CreateListingPallet">
            <form action="" >
                <h2>Product Details</h2>
                <h4>Category</h4>
                <input type="text" placeholder='Select the Category of your Listing'/>
                <h4>Title</h4>
                <input type="text" placeholder='Enter the title of your listing' />
                <h4>Upload at least one image of your Listing</h4>
                <input type="file" required/>
                <input type="file" />
                <input type="file" />
                <h4>Category</h4>
                <textarea type="text"  style={{height: '10rem', width: '90%', padding: '1rem', boxSizing:'border-box',lineHeight:'1.3rem', backgroundColor: '#babd9e33', color: '#ffffff' }}  placeholder='Give a description of your Listing'/>

                <h2>Seller Details</h2>
                <h4>Category</h4>
                <input type="text" placeholder='Select the Category of your Listing'/>
                <h4>Title</h4>
                <input type="text" placeholder='Enter the title of your listing' />
                <h4>Upload at least one image of your Listing</h4>
                <input type="file" required/>
                <input type="file" />
                <input type="file" />

                <h2>Promotion Type Details</h2>
                <p>The premium package help sellers to promote their products or services by giving more visibility to their listings to attract more buyers and sell faster.</p>
                <h4>Category</h4>
                <div className='subscriptionType'>
                    <div id='type'>
                        <input type="radio" name='options' />
                        <p>FREE ADS</p>
                    </div>
                    <span>GHS 0.00</span>
                </div>
                <div className='subscriptionType'>
                    <div id='type'>
                        <input type="radio" name='options' />
                        <p>STANDARD ADS</p>
                    </div>
                    <span>GHS 8.00</span>
                </div>
                <div className='subscriptionType'>
                    <div id='type'>
                        <input type="radio" name='options' />
                        <p>PREMIUM ADS</p>
                    </div>
                    <span>GHS 15.00</span>
                </div>
                {/* <div className='subscriptionType'><input type="radio" name='options' /><p>STANDARD</p></div>
                <div className='subscriptionType'><input type="radio" name='options' /><p>PREMIUM</p></div>
                 */}
            </form>
          </div>
        </div>
       
    </div>
  )
}

export default CreateListing