import React, {
  Component
}
from 'react'

class Panel extends Component {
  addStudent(event) {
    event.preventDefault()
    const student = {
      name: this.name.value.split('\n'),
      age: this.age.value.split('\n'),
      contact: this.contact.value.split('\n'),
      diet: this.diet.value.split('\n')
    }
    for (let i in student.name) {
      this.props.addStudent({
        name: student.name[i],
        age: student.age[i],
        contact: student.contact[i],
        diet: student.diet[i]
      })
    }
    this.panelForm.reset()
  }
  render() {
    return (
      <div className='panel' onSubmit={(e) => this.addStudent(e)}>
        <form ref={(input) => this.panelForm = input} action='' className='student-form'>
          <textarea rows="8" ref={(input) => this.name = input} type='text' placeholder='Student Name List' required />
          <textarea rows="8" ref={(input) => this.gender = input} type='text' placeholder='Gender' required />
          <textarea rows="8" ref={(input) => this.age = input} type='text' placeholder='Age' required />
          <textarea rows="8" ref={(input) => this.contact = input} type='text' placeholder='Contact Number' required />
          <textarea rows="8" ref={(input) => this.diet = input} type='text' placeholder='Dietary Requirements' required />
          <button type='submit'>Add</button>
        </form>

      </div>
    )
  }
}

export default Panel
