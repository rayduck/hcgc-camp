import Clipboard from 'clipboard'
new Clipboard('#json-btn')
import React, { Component } from 'react'
class Export extends Component {
  constructor () {
    super()
    this.convertJSON = this.convertJSON.bind(this)
    this.state = {
      JSONOutput: []
    }
  }
  convertJSON (event) {
    event.preventDefault()
    const JSONdata = JSON.parse(this.JSONInput.value)
    const schools = Object.keys(JSONdata)
    const output = []

    for (let sch of schools) {
      const students = JSONdata[sch].students
      for (let student in students) {
        const name = String(students[student].name)
        const age = String(students[student].age)
        const diet = String(students[student].diet)
        const contact = String(students[student].contact)
        output.push({
          name, age, diet, contact, school: sch
        })
      }
    }

    this.setState({JSONOutput: JSON.stringify(output)})
  }
  render () {
    return (
      <div className='export'>
        <form className='json-input' onSubmit={this.convertJSON}>
          <h2>Convert JSON</h2>
          <textarea type='text'required placeholder='Input JSON data' ref={(input) => { this.JSONInput = input }} />
          <button type='submit'>Convert</button>
        </form>
        <p id='json-output'>{this.state.JSONOutput}</p>
        <button data-clipboard-target='#json-output' id='json-btn'>Copy</button>
        <h5>Convert the converted JSON data <a href='https://konklone.io/json/' target='_blank'>here</a></h5>
      </div>
    )
  }
}

export default Export
