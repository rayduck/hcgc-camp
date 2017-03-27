import React, { Component } from 'react'
import {BrowserRouter as Router, RouterContext, Route, Link} from 'react-router-dom'
import base from '../base'

import StudentInfo from './StudentInfo'
import Panel from './Panel'

class School extends Component {
  constructor () {
    super()
    // bind some stuff
    this.addStudent = this.addStudent.bind(this)
    // initialize state
    this.state = {
      students: {}
    }
  }
  addStudent (student) {
    // update state
    const students = {...this.state.students}
    const timestamp = Date.now() // using timestamp to generate unique students
    students[`student-${timestamp}`] = student
    // set state
    this.setState({ students })
  }
  render () {
    return (
      <div className='School'>
        <h2>This is the School participants portion</h2>
        <p>School is {this.props.match.params.schoolId}</p>
        <StudentInfo />
        <Panel addStudent={this.addStudent} />
      </div>
    )
  }
}
/*
const School = ({match}) => (
  <div>
    <h3>school is {match.params.schoolId}</h3>
  </div>
)
*/

export default School
