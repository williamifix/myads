import React from 'react'
import './Pricing.css'
import '../App.css'

function Pricing() {
  return (
    <div className='Login'>
        <div className="pricingPallet">
        <h1>Pricing</h1>
        <p>Check out Pricings. We recommend STANDARD for personal, small scale and medium business Ads</p>
        <div className="priceCategory">
            <div className="priceFree">
                <div className="priceHeader">
                    <h2>
                        FREE
                    </h2>
                </div>
                <div className="priceDetails">

                </div>
                <button>Get Started</button>
            </div>
            <div className="priceStandard">
            <div className="priceHeader">
                    <h2>
                        STANDARD
                    </h2>
                </div>
                <div className="priceDetails">

                </div>
                <button>Get Started</button>
            </div>
            <div className="pricePremium">
            <div className="priceHeader">
                    <h2>
                        PREMIUM
                    </h2>
                </div>
                <div className="priceDetails">

                </div>
                <button>Get Started</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Pricing