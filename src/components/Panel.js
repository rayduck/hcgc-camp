import React, {
  Component
}
from 'react'

class Panel extends Component {
  constructor (props) {
    super(props)
    this.addStudent = this.addStudent.bind(this)
  }

  addStudent (event) {
    event.preventDefault()
    const student = {
      name: this.name.value.split('\n').filter(name => name),
      age: this.age.value.split('\n'),
      contact: this.contact.value.split('\n'),
      diet: this.diet.value.split('\n')
    }
    this.props.addStudent(student)
    this.panelForm.reset()
  }
  render () {
    return (
      <div className='panel' onSubmit={(e) => this.addStudent(e)}>
        <form ref={(input) => this.panelForm = input} action='' className='student-form'>
          <div className='panel-inputs'>
            <textarea rows='5' ref={(input) => this.name = input} type='text' placeholder='Student Name List' required />
            <textarea rows='5' ref={(input) => this.age = input} type='number' placeholder='Age' required />
            <textarea rows='5' ref={(input) => this.contact = input} type='number' placeholder='Parent&apos;s Contact Number' required />
            <textarea rows='5' ref={(input) => this.diet = input} type='text' placeholder='Dietary Requirements (input "-" if none)' required />
          </div>
          <button type='submit' className='full-btn' >Add</button>
        </form>
      </div>
    )
  }
}

export default Panel
