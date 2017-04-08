import React, { Component } from 'react'
import { render } from 'react-dom'
import './css/style.css'

import MainCtrl from './MainCtrl'

class Root extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <MainCtrl />
    )
  }
}

render(<Root />, document.querySelector('#main'))
