import React, { Component }
from 'react'

class Student extends Component {
  render () {
    const {
      details
    } = this.props
    return (
      <li className='student-list'>
        <div className='student-1'>
          {details.name}
        </div>
        <div className='student-2'>
          {details.age}
        </div>
        <div className='student-1'>
          {details.contact}
        </div>
        <div className='student-1'>
          {details.diet}
        </div>
        <div className='student-2'>
          <a className="delete" onClick={() => this.props.removeStudent(this.props.studentId)}><i className="fa fa-times"></i></a>
        </div>
      </li>
    )
  }
}

export default Student
