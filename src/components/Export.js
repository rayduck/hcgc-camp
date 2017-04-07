import Clipboard from 'clipboard'
new Clipboard('#json-btn')
import React, { Component } from 'react'
class Export extends Component {
  constructor () {
    super()
    this.convertJSON = this.convertJSON.bind(this)
    this.state = {
      JSONOutput: '',
      displayStyle: {'display': 'none'}
    }
  }
  convertJSON (event) {
    event.preventDefault()
    const JSONdata = JSON.parse(this.JSONInput.value)
    const schools = Object.keys(JSONdata)
    const output = []
//    const teacherDetails = []

    for (let school of schools) {
      const {teacherContact, teacherName} = JSONdata[school].schoolDetails
      output.push({school, teacherContact, teacherName})
      const {students} = JSONdata[school]
      for (let student in students) {
        const name = String(students[student].name)
        const age = String(students[student].age)
        const diet = String(students[student].diet)
        const contact = String(students[student].contact)
        output.push({
          name, age, diet, contact, school
        })
      }
    }

    this.setState({JSONOutput: JSON.stringify(output), displayStyle: {}})
  }
  render () {
    return (
      <div className='export'>
        <form className='json-input' onSubmit={this.convertJSON}>
          <h2>Convert JSON</h2>
          <textarea type='text'required placeholder='Input JSON data' ref={(input) => { this.JSONInput = input }} />
          <button className='full-btn' type='submit'>Convert</button>
        </form>
        <div style={this.state.displayStyle}>
          <p id='json-output'>{this.state.JSONOutput}</p>
          <button className='full-btn' data-clipboard-target='#json-output' id='json-btn'>Copy</button>
          <h1 className='JSON-link'>Copy the above data, and get .csv file <u><a href='https://konklone.io/json/' target='_blank'>here</a></u></h1>
        </div>
      </div>
    )
  }
}

export default Export
