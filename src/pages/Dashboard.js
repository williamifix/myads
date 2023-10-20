import React from 'react'
import { useState } from 'react';
// import image from './menu.png'
import '../App.css';
import './Dashboard.css';

import listicon from  './list.svg'
import userIcon from './user.svg'
import stampIcon from './stamp.svg'
import logoutIcon from './logout.svg'
import overviewIcon from './telescope.svg'
import settingsIcon from './settings-alt.svg'
import revenueIcon from './money-bag.svg'
import analyticsIcon from './chart-bar-graph.svg'
import scoreIcon from './star-shape.svg'
// import  from './.svg'


function DashBoard() {
  
  const [isDashBoardSideMenuVisible, setDashboardSideMenuVisibility] = useState(true);

  const toggleDashboardSideMenu = () => {
    setDashboardSideMenuVisibility(!isDashBoardSideMenuVisible);

    if(isDashBoardSideMenuVisible){
      document.querySelector('span').innerHTML ='->'
    }
    else{
      document.querySelector('span').innerHTML ='<-'

    }
  };




  return (
    <div className='Login'>
       
        <div className='dashBoardPallet'>
              <div className="sideMenu" style={{width: isDashBoardSideMenuVisible? '300px':'4.2rem'}}>
                <div className="sideMenuHead">
                <span  onClick={toggleDashboardSideMenu}>&lt;-</span>

                  {/* <h2>DASHBOARD</h2>  */}
                </div>

                <ul>
                  <div className="sideItem">
                    <img src={listicon} alt="" />
                    <li>My Listings</li>
                  </div>

                  <div className="sideItem">
                    <img src={stampIcon} alt="" />
                    <li>Approvals</li>
                  </div>

                  <div className="sideItem">
                    <img src={revenueIcon} alt="" />
                    <li>Revenue</li>
                  </div>

                  <div className="sideItem">
                    <img src={analyticsIcon} alt="" />
                    <li>Analytics</li>
                  </div>

                  <div className="sideItem">
                    <img src={scoreIcon} alt="" />
                    <li>Score Board</li>
                  </div>

                  {/* <div className="sideItem">
                    <img src={listicon} alt="" />
                    <li>Something</li>
                  </div> */}

                </ul>

               
                  <ul className='dashboardSettings'>
                  <div className="sideItem">
                    <img src={overviewIcon} alt="" />
                    <li>Overview</li>
                  </div>                    
                  <div className="sideItem">
                    <img src={settingsIcon} alt="" />
                    <li>Settings</li>
                  </div>
                  
                  <div className="sideItem">
                    <img src={logoutIcon} alt="" />
                    <li>Logout</li>
                  </div>                  </ul>
              </div>
              <div className="mainMenu">
                  <div className='dashBoardHeader'>
                      <div className="user">
                        <div className="userImage"><img src={userIcon} alt="user profile" /></div>
                        <div className="userName">JAMES GOKU</div>
                      </div>
                  </div>
                  <div className="dashBoardBody">

                  </div>

              </div>
        </div>
          
            
       
    </div>
  )
}

export default DashBoard