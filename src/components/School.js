import React, { Component } from 'react'
import {BrowserRouter as Router, RouterContext, Route, Link} from 'react-router-dom'
import base from '../base'

import StudentInfo from './StudentInfo'
import Panel from './Panel'

/*
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
*/
const School = ({match}) => (
  <div>
    <h3>school is {match.params.schoolId}</h3>
  </div>
)

export default School
