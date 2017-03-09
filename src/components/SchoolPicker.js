import React from 'react'

class SchoolPicker extends React.Component {
  render () {
    return (
      <form className='school-selector' onSubmit={this.goToSchool}>
        <h2>Please Enter A School</h2>
        <input type='text'required placeholder='Enter your School code' ref={(input) => { this.SchoolInput = input }} />
        <button type='submit'>Signup</button>
      </form>
    )
  }
}

SchoolPicker.contextTypes = {
  router: React.PropTypes.object
}

export default SchoolPicker
