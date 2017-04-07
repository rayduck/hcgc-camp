import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
}
from 'react-router-dom'

const Navbar = ({
  logout,
  showLogout,
  changePasswd
}) => {
  const logoutBtn =
    (<div>
      <button className='logout-btn' onClick={changePasswd}>Change Password</button>
      <button className='logout-btn' onClick={logout}>logout</button>
    </div>)
  return (
    <div className='fixed-nav-bar'>
      <div className='pull-left'><Link to='/'>Green Camp 2017</Link></div>
      <div className='pull-right'>
        {showLogout ? logoutBtn : <div /> }
      </div>
    </div>
  )
}

export default Navbar
