// This component is the main controller for adding students etc

import React, {
  Component
}
from 'react'
import base from '../base'

import Panel from './Panel'
import Student from './Student'
import Navbar from './Navbar'

class School extends Component {
  constructor (props) {
    super(props)
      // bind some stuff
    this.addStudent = this.addStudent.bind(this)
    this.removeStudent = this.removeStudent.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.authenticate = this.authenticate.bind(this)
    this.authHandler = this.authHandler.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleTeacherNameChange = this.handleTeacherNameChange.bind(this)
    this.handleTeacherContactChange = this.handleTeacherContactChange.bind(this)
    this.logout = this.logout.bind(this)
    this.changePasswd = this.changePasswd.bind(this)
    this.renderLogin = this.renderLogin.bind(this)

    // initialize state
    this.state = {
      errorMessage: false,
      teacherName: '',
      teacherContact: '',
      email: '',
      schoolCode: '',
      ownerIds: '',
      firstLogin: true,
      loading: true,
      sniperino: false,
      placesLeft: this.props.placesLeft
    }
  }
  componentWillMount () {
    // Sync state with the specific school db
    base.fetch(`${this.props.match.params.schoolId}/owner`, {
      context: this
    }).then(data => {
      if (data.length > 0) { this.setState({firstLogin: false}) }
    })

    this.ref = base.syncState(`${this.props.match.params.schoolId}/students`, {
      context: this,
      state: 'students',
      then: () => {
        const {loading} = this.state
        if (loading !== 'pending') this.setState({ loading: false})
      }
    })
  }
  componentDidMount () {
    base.onAuth((user) => {
      if (user) {
        this.setState({ loading: 'pending'})
        this.authHandler(null, user)
      }
    }) // Auth user under the hood if already logged in
  }
  componentWillUnmount () {
    base.removeBinding(this.ref)
  }
  addStudent (student) {
    // update state
    const students = {...this.state.students}
    let placesLeft = this.state.placesLeft
    const numOfStudent = student.name.length
    const studentsToAdd = numOfStudent < placesLeft ? numOfStudent : placesLeft
    for (let i = 0; i < studentsToAdd; i++) {
      let timestamp = Date.now() // using timestamp to generate unique students
      let newStudent = {
        name: student.name[i],
        age: student.age[i],
        contact: student.contact[i],
        diet: student.diet[i]
      }
      students[`student-${timestamp}${i}`] = newStudent
      placesLeft -= 1
    }
      // set state
    this.setState({
      students,
      placesLeft
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
    const placesLeft = this.state.placesLeft + 1
    this.setState({
      students,
      placesLeft
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
      this.setState({ errorMessage: 'Wrong username or school code. Please try again', loading: false})
      return
    }
    if (authData.emailVerified === false) {
      this.setState({errorMessage: 'Account not verified. Please check your email!', loading: false})
      return
    }
    // check if sniperino
    base.fetch('/', { context: this})
      .then(data => {
        const ownerIds = []
        for (let school of Object.keys(data)) {
          ownerIds.push(data[school].owner)
        }
        this.setState({ownerIds})
      })
      .then(() => {
        const schoolRef = base.database().ref(this.props.match.params.schoolId)
      // query fb once for school data
        schoolRef.once('value', (snapshot) => {
          const data = snapshot.val() || {}
          let hasSchool = false
          for (let owner of this.state.ownerIds) {
            if (owner === authData.uid) hasSchool = true
          }

          const sniperino = !data.owner && hasSchool

      // claim ownership for first time
          if (!data.owner && !hasSchool) {
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
            owner: data.owner || authData.uid,
            sniperino,
            loading: false
          })
        })
      })
  }

  logout () {
    base.unauth()
    this.setState({
      uid: null
    })
    this.props.history.push('/')
  }

  changePasswd () {
    base.onAuth((user) => {
      if (user) {
        base.resetPassword({
          email: user.email
        })
      }
    })
    base.unauth()
    this.setState({
      uid: null
    })
    alert('Please check your email for instructions')
    this.props.history.push('/')
  }

  renderLogin () {
    const { errorMessage } = this.state
    const TeacherDetails = (
      <div>
        <h2 className='title'>{errorMessage || 'Please Enter Your Details' }</h2>
        <input type='text' required placeholder='Name of Main teacher In-Charge' value={this.state.teacherName} onChange={this.handleTeacherNameChange} />
        <input type='number' required placeholder='Contact Number' value={this.state.teacherContact} onChange={this.handleTeacherContactChange} />
      </div>
      )
    const LoginMessage = (
      <div>
        <h2 className='title'>{errorMessage || 'Please Login' }</h2>
      </div>
      )
    return (
      <div>
        <Navbar placesLeft={this.state.placesLeft} />
        <form className='login' onSubmit={this.authenticate}>
          {this.state.firstLogin ? TeacherDetails : LoginMessage}
          <input type='email' required placeholder='Email' value={this.state.email} onChange={this.handleEmailChange} />
          <input type='password' required placeholder='Password' value={this.state.schoolCode} onChange={this.handlePasswordChange} />
          <button type='submit' className='full-btn'>Submit</button>
          <div className='text'><i className='fa fa-exclamation-circle' />&nbsp;Note: You can only log in after verifying your email address</div>
        </form>
      </div>
    )
  }
    // Will consider adding updateStudent if necessary
  render () {
    if (this.state.loading) {
      return <div><i className='middle fa fa-spinner fa-pulse fa-5x fa-fw' /></div>
    }
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    if (this.state.uid !== this.state.owner || this.state.sniperino) {
      return (
        <div>
          <Navbar logout={this.logout} changePasswd={this.changePasswd} showLogout placesLeft={this.state.placesLeft} />
          <h2 className='title'>Unauthenticated</h2>
        </div>
      )
    }
    return (
      <div className='School'>
        <Navbar logout={this.logout} changePasswd={this.changePasswd} showLogout placesLeft={this.state.placesLeft} />
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
          { Object.keys(this.state.students).reverse().map(key => <Student key={key} details={this.state.students[key]} removeStudent={this.removeStudent} studentId={key} />) /* Here we use map to iterate all the students in our state and generate a Student component. key is added to make all components unique. */}
        </ul>
        {this.state.placesLeft > 0 ? <Panel addStudent={this.addStudent} placesLeft={this.state.placesLeft} /> : <div /> }

      </div>
    )
  }
}

export default School
