// This component is the main controller for adding students etc

import React, {Component}
from 'react'
import base from '../base'

import Panel from './Panel'
import Student from './Student'
import Navbar from './Navbar'

class School extends Component {
  constructor () {
    super()
      // bind some stuff
    this.addStudent = this.addStudent.bind(this)
    this.removeStudent = this.removeStudent.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.authenticate = this.authenticate.bind(this)
    this.authHandler = this.authHandler.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.logout = this.logout.bind(this)

    // initialize state
    this.state = {
      students: {},
      uid: '',
      teacherName: '',
      teacherContact: '',
      email: '',
      schoolCode: '',
      loginText: 'Please Login',
      loading: true
    }
  }
  componentWillMount () {
    // Sync state with the specific school db
    this.ref = base.syncState(`${this.props.match.params.schoolId}/students`, {
      context: this,
      state: 'students',
      then: () => { this.setState({loading: false}) }
    })
  }
  componentDidMount () {
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, user)
      }
    }) // Auth user under the hood if already logged in
  }
  componentWillUnmount () {
    base.removeBinding(this.ref)
  }
  addStudent (student) {
    // update state
    const students = {...this.state.students
    }
    const timestamp = Date.now() // using timestamp to generate unique students
    students[`student-${timestamp}`] = student
      // set state
    this.setState({
      students
    })
  }
  handleEmailChange (e) {
    this.setState({
      email: e.target.value
    })
  }
  handlePasswordChange (e) {
    this.setState({
      schoolCode: e.target.value
    })
  }
  handleTeacherNameChange (e) {
    this.setState({
      teacherName: e.target.value
    })
  }
  handleTeacherContactChange (e) {
    this.setState({
      teacherContact: e.target.value
    })
  }
  removeStudent (studentId) {
    const students = {...this.state.students
    }
    students[studentId] = null
    this.setState({
      students
    })
  }
  authenticate (event) {
    event.preventDefault()
    base.authWithPassword({
      email: this.state.email,
      password: this.state.schoolCode
    }, this.authHandler)
  }
  authHandler (err, authData) {
    if (err) {
      this.setState({
        loginText: 'Wrong username or school code. Please try again!'
      })
      return
    }
    const schoolRef = base.database().ref(this.props.match.params.schoolId)
      // query fb once for school data
    schoolRef.once('value', (snapshot) => {
      const data = snapshot.val() || {}

      // claim ownership for first time
      if (!data.owner) {
        schoolRef.set({
          owner: authData.uid,
          schoolDetails: {
            teacherName: this.state.teacherName,
            teacherContact: this.state.teacherContact
          }
        })
      }

      this.setState({
        uid: authData.uid,
        owner: data.owner || authData.uid
      })
    })
  }

  logout () {
    base.unauth()
    this.setState({
      uid: null
    })
  }
  renderLogin () {
    return (
      <div>
        <Navbar />
        <h2 className='title'>Please Enter Your Details</h2>
        <form className='login' onSubmit={this.authenticate}>
          <input type='text'required placeholder='Name of Main teacher In-Charge' ref={(input) => { this.nameInput = input }} />
          <input type='number'required placeholder='Contact Number' ref={(input) => { this.contactInput = input }} />
          <input type='text' required placeholder='Email' value={this.state.email} onChange={this.handleEmailChange} />
          <input type='password' required placeholder='schoolCode' value={this.state.schoolCode} onChange={this.handlePasswordChange} />
          <button type='submit' className='full-btn'>Submit</button>
        </form>
      </div>
    )
  }
    // Will consider adding updateStudent if necessary
  render () {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <Navbar logout={this.logout} showLogout />
          <h2>Unauthenticated</h2>
        </div>
      )
    }
    return (
      <div className='School'>
        <Navbar logout={this.logout} showLogout />
        <h2 className='title'>Add participants for {this.props.match.params.schoolId} :</h2>
        <ul className='list-of-students'>
          <li className='student-list-header'>
            <div className='student-1'>
              Name
            </div>
            <div className='student-2'>
              Age
            </div>
            <div className='student-1'>
              Parents' Contact
            </div>
            <div className='student-1'>
              Dietary Requirements
            </div>
            <div className='student-2' />
          </li>
          { Object.keys(this.state.students).map(key => <Student key={key} details={this.state.students[key]} removeStudent={this.removeStudent} studentId={key} />) /* Here we use map to iterate all the students in our state and generate a Student component. key is added to make all components unique. */}
        </ul>
        <Panel addStudent={this.addStudent} />
      </div>
    )
  }
}

export default School
