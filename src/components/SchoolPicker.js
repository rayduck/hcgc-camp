import React from 'react'
import base from '../base'
import { Typeahead } from 'react-typeahead'

class SchoolPicker extends React.Component {
  constructor () {
    super()
    this.goToSchool = this.goToSchool.bind(this)
  }
  goToSchool (event) {
    event.preventDefault()
    const schoolId = this.typeHeadInput.state.entryValue
    this.props.history.push(`/school/${schoolId}`)
  }
  render () {
    return (
      <form className='school-selector' onSubmit={this.goToSchool}>
        <h2 className='title'>Please Enter Your School</h2>
        <Typeahead options={['Hwa Chong Institution', 'Raffles Institution', 'test', 'anything', 'no-school']} name='school' maxVisible={8} placeholder='School' ref={(input) => { this.typeHeadInput = input }} />
        <button type='submit' className='full-btn'>Submit</button>
      </form>
    )
  }
}

SchoolPicker.contextTypes = {
  router: React.PropTypes.object
}

export default SchoolPicker
