import React, { Component } from 'react'

import StudentInfo from './StudentInfo'
import Panel from './Panel'

class School extends Component {
  render () {
    return (
      <div className='School'>
        <h2>This is the School participants portion</h2>
        <StudentInfo />
        <Panel />
      </div>
    )
  }
}

export default School
