import React, { Component } from 'react'

class BackToTop extends Component {
  constructor () {
    super()
    this.state = {displayStyle: 'none'}
    this.visibilityCtrl = this.visibilityCtrl.bind(this)
    this.scrollUp = this.scrollUp.bind(this)
  }
  visibilityCtrl () {
    const visibility = (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) ? 'block' : 'none'
    this.setState({displayStyle: visibility})
  }
  scrollUp () {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (top > 0) {
      window.scrollTo(0, top - 50)
      setTimeout(this.scrollUp, 10)
    }
  }
  componentDidMount () {
    window.addEventListener('scroll', this.visibilityCtrl)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.visibilityCtrl)
  }
  render () {
    return (
      <a className='back-to-top' onClick={this.scrollUp} style={{display: this.state.displayStyle}}>Back to Top</a>
    )
  }
}

export default BackToTop
