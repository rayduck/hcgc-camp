import React from 'react'

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
        <h2>Please Enter Your School</h2>
        <input type='text'required placeholder='Enter your School Code' ref={(input) => { this.schoolInput = input }} />
        <button type='submit'>Signup</button>
      </form>
    )
  }
}

SchoolPicker.contextTypes = {
  router: React.PropTypes.object
}

export default SchoolPicker
