import React from 'react'
import { Link } from 'react-router-dom'

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
      <div className='pull-left'><Link to='/'>Green Camp 2017</Link> | {placesLeft > 0 ? `${placesLeft} places remaining` : 'Fully registered'}</div>
      <div className='pull-right'>
        {showLogout ? logoutBtn : <div /> }
      </div>
    </div>
  )
}

export default Navbar
