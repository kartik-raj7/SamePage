import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Topnav(){
    return(
        <div className='top-nav'>
            
            <button><FilterAltIcon/></button>
            <h3>My DashBoard</h3>
            <div className='side-icons'>
            <h3 style={{"color":"blue","font-size":"12px","margin":"auto"}}>Your Trial ends in 3 days</h3>
            <button>Request Demo</button>
            <button>Recommended Features</button>
            <button>Get Started</button>
            <button style={{"display": "flex", "align-items": "center"}}><span><AddBoxIcon/></span>New</button>
            <input type="search" placeholder='Search' style={{'margin':'10px 10px 10px 10px'}}></input>
            <div style={{"margin":"auto"}}><NotificationsIcon/></div>
            <button style={{"border-radius": "15%"}}>K</button>
            </div>
        </div>

    );
}
export default Topnav;