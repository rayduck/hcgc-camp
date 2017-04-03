import React, {
  Component
}
from 'react'

class Student extends Component {
  render() {
    const {
      details
    } = this.props
    return (
      <li className='student-list'>
        <div className='student'>
          {details.name}
        </div>
        <div className='student'>
          {details.age}
        </div>
        <div className='student'>
          {details.contact}
        </div>
        <div className='student'>
          {details.diet}
        </div>
        <div className='student'>
        <a onClick={() => this.props.removeStudent(this.props.studentId)}>x</a>
        </div>
    </li>
    )
  }
}

export default Student
