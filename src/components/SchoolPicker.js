import React from 'react'
import base from '../base'

class SchoolPicker extends React.Component {
  constructor () {
    super()
    this.goToSchool = this.goToSchool.bind(this)
  }
  goToSchool (event) {
    event.preventDefault()
    const schoolId = this.schoolInput.value
    const name = this.nameInput.value
    const contact = this.contactInput.value
    const email = this.emailInput.value
      /*  base.resetPassword({
          email: ''
        }, function(error, user) {
          console.log(user);
          }) */
    this.props.history.push(`/school/${schoolId}`)
  }
  render () {
    return (
      <form className='school-selector' onSubmit={this.goToSchool}>
        <h2 className='title'>Please Enter Your Details</h2>
        <input type='text'required placeholder='Name of Main teacher In-Charge' ref={(input) => { this.nameInput = input }} />
        <input type='number'required placeholder='Contact Number' ref={(input) => { this.contactInput = input }} />
        <input type='email'required placeholder='Email' ref={(input) => { this.emailInput = input }} />
        <input type='text'required placeholder='School code' ref={(input) => { this.schoolInput = input }} />
        <button type='submit' className='full-btn' >Confirm</button>
      </form>
    )
  }
}

SchoolPicker.contextTypes = {
  router: React.PropTypes.object
}

export default SchoolPicker
