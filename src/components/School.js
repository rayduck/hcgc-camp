import React, { Component } from 'react'
import {BrowserRouter as Router, RouterContext, Route, Link} from 'react-router-dom'
import base from '../base'

import StudentInfo from './StudentInfo'
import Panel from './Panel'
import Student from './Student'

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
        <ul className='list-of-students'>
          {Object.keys(this.state.students).map(key => <Student key={key} details={this.state.students[key]} />) /* Here we use map to iterate all the students in our state and generate a Student component. key is added to make all components unique. */}
        </ul>
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
