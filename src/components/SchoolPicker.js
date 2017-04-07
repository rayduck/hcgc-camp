import React from 'react'
import base from '../base'
import {
  Typeahead
}
from 'react-typeahead'

class SchoolPicker extends React.Component {
  constructor () {
    super()
    this.goToSchool = this.goToSchool.bind(this)
  }
  goToSchool (event) {
    event.preventDefault()
    const schoolId = this.schoolInput.value
    this.props.history.push(`/school/${schoolId}`)
  }
  render () {
    return (
      <form className='school-selector' onSubmit={this.goToSchool}>
        <h2 className='title'>Please Enter Your School</h2>
        <input type='text'required placeholder='School name' ref={(input) => { this.schoolInput = input }} />
      </form>
    )
  }
}

SchoolPicker.contextTypes = {
  router: React.PropTypes.object
}

export default SchoolPicker
