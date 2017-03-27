import React, { Component } from 'react'

class Panel extends Component {
  addStudent (event) {
    event.preventDefault()
    const student = {
      name: this.name.value,
      age: this.age.value,
      contact: this.contact.value,
      diet: this.diet.value
    }
    this.props.addStudent(student)
    this.panelForm.reset()
  }
  render () {
    return (
      <div className='panel' onSubmit={(e) => this.addStudent(e)}>
        <form ref={(input) => this.panelForm = input} action='' className='student-form'>
          <input ref={(input) => this.name = input} type='text' placeholder='Student Name' />
          <select>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <input ref={(input) => this.age = input} type='text' placeholder='Student Age' />
          <input ref={(input) => this.contact = input} type='text' placeholder='Contact Number' />
          <input ref={(input) => this.diet = input} type='text' placeholder='Dietary Requirements' />
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default Panel
