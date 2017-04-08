import React, { Component } from 'react'
import base from '../base'

class Signup extends Component {
  constructor () {
    super()
    this.signupUser = this.signupUser.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.signupHandler = this.signupHandler.bind(this)
    this.state = {
      email: '',
      password: '',
      signupText: 'Please sign up'
    }
  }
  signupUser (e) {
    e.preventDefault()
    console.log(`email is ${this.state.email}`)
    base.createUser({
      email: this.state.email,
      password: this.state.password}, this.signupHandler)
  }
  signupHandler (err) {
    if (err) console.log(err)
    this.setState({
      signupText: 'Success! Redirecting to Login'
    })
    base.unauth()
    setTimeout(() => { this.props.history.push('/join') }, 1000)
  }
  handleEmailChange (e) {
    this.setState({
      email: e.target.value
    })
  }
  handlePasswordChange (e) {
    this.setState({
      password: e.target.value
    })
  }
  render () {
    return (
      <form className='signup' onSubmit={this.signupUser}>
        <h2>{this.state.signupText}</h2>
        <input type='email' required placeholder='Email' value={this.state.email} onChange={this.handleEmailChange} />
        <input type='password' required placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange} />
        <button type='submit' className='full-btn'>Sign up</button>
      </form>
    )
  }
}

export default Signup
