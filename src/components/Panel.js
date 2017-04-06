import React, {
  Component
}
from 'react'

class Panel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  addStudent (event) {
    event.preventDefault()
    var validation = /[^0-9]+/g
    const student = {
      name: this.name.value.split('\n'),
      age: this.age.value.split('\n'),
      contact: this.contact.value.split('\n'),
      diet: this.diet.value.split('\n')
    }
    for (let i in student.name) {
      if (validation.test(student.age[i]) === true || validation.test(student.contact[i]) === true) {
        this.setState({
          error: 'Some input are ignored due to invalid characters, especially number inputs'
        })
        continue
      } else {
        this.props.addStudent({
          name: student.name[i],
          age: student.age[i],
          contact: student.contact[i],
          diet: student.diet[i]
        })
      }
    }
    this.panelForm.reset()
  }
  render () {
    return (
      <div className='panel' onSubmit={(e) => this.addStudent(e)}>
        <form ref={(input) => this.panelForm = input} action='' className='student-form'>
          <div className='panel-inputs'>
            <textarea rows='8' ref={(input) => this.name = input} type='text' placeholder='Student Name List' required />
            <textarea rows='8' ref={(input) => this.age = input} type='number' placeholder='Age' required />
            <textarea rows='8' ref={(input) => this.contact = input} type='number' placeholder='Contact Number' required />
            <textarea rows='8' ref={(input) => this.diet = input} type='text' placeholder='Dietary Requirements (Put "-" if none)' required />
          </div>
          <button type='submit' className='full-btn' >Add</button>
        </form>
        <h1 className='title'>{this.state.error}</h1>
      </div>
    )
  }
}

export default Panel
