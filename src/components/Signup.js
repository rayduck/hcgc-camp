import React, { Component } from 'react'
import base from '../base'

class Signup extends Component {
  constructor () {
    super()
    this.signupUser = this.signupUser.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.signupHandler = this.signupHandler.bind(this)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      signupText: 'Please sign up'
    }
  }
  signupUser (e) {
    e.preventDefault()
    base.createUser({
      email: this.state.email,
      password: this.state.password}, this.signupHandler)
  }
  signupHandler (err, user) {
    if (err) {
      if (err.code === 'auth/email-already-in-use') this.setState({signupText: 'Email already exists. Please log in!'})
    } else {
      user.sendEmailVerification()
      this.setState({
        signupText: 'Success! Please check your email to verify your account!'
      })
      base.unauth()
    }
    setTimeout(() => { this.props.history.push('/') }, 2700)
  }
  handleInputChange (e) {
    const samePasswd = (target, value) => {
      const validity = value === this.state.password ? '' : 'passwords do not match!'
      target.setCustomValidity(validity)
    }
    const {name, value} = e.target
    this.setState({
      [name]: value
    }, name === 'confirmPassword' && samePasswd(e.target, value))
  }
  render () {
    return (
      <form className='signup' onSubmit={this.signupUser}>
        <h2 className='title'>{this.state.signupText}</h2>
        <input name='email' type='email' required placeholder='Email' value={this.state.email} onChange={this.handleInputChange} />
        <input name='password' type='password' required placeholder='Password' value={this.state.password} onChange={this.handleInputChange} />
        <input name='confirmPassword' type='password' required placeholder='Confirm password' value={this.state.confirmPassword} onChange={this.handleInputChange} />
        <button type='submit' className='full-btn'>Sign up</button>
        <div className='text'><i className='fa fa-bell-o' />&nbsp;Note: Please verify your email address before logging in</div>
      </form>
    )
  }
}

export default Signup
