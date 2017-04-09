import React from 'react'
import { Link } from 'react-router-dom'
const logo = require('../../public/hcfavicon.ico')

const Navbar = ({
  logout,
  showLogout,
  changePasswd,
  placesLeft
}) => {
  const logoutBtn =
    (<div>
      <button className='logout-btn' onClick={changePasswd}>Change Password</button>
      <button className='logout-btn' onClick={logout}>logout</button>
    </div>)
  return (
    <div className='fixed-nav-bar'>
      <img className='logo-nav' src={logo} alt='logo'/>
      <div className='pull-left'><Link to='/'>&nbsp;Green Camp 2017</Link> | {placesLeft > 0 ? `${placesLeft} places remain` : 'Fully registered'}</div>
      <div className='pull-right'>
        {showLogout ? logoutBtn : <div /> }
      </div>
    </div>
  )
}

export default Navbar
