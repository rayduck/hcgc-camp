import React, { Component } from 'react'

class Student extends Component {
  render () {
    const { details } = this.props
    return (
      <li className='student'>
        <p className='student-name'>
          {details.name}
        </p>
        <p className='student-age'>
          {details.age}
        </p>
        <p className='student-contact'>
          {details.contact}
        </p>
        <p className='student-diet'>
          {details.diet}
        </p>
        <button onClick={() => this.props.removeStudent(this.props.studentId)}>&times;</button>
      </li>
    )
  }
}

export default Student
