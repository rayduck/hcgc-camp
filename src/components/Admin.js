import React, { Component } from 'react'

import AccessCodes from './AccessCodes'
import EventOptions from './EventOptions'

class Admin extends Component {
  render () {
    return (
      <div className='admin'>
        <h2>This is the admin panel</h2>
        <AccessCodes />
        <EventOptions />
      </div>
    )
  }
}

export default Admin
