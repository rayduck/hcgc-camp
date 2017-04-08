import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SchoolPicker from './components/SchoolPicker'
import School from './components/School'
import Main from './components/Main'
import Export from './components/Export'
import base from './base'
import { getPlacesLeft } from './utils'

class MainCtrl extends Component {
  constructor () {
    super()
    this.state = {
      placesLeft: '...'
    }
  }
  componentWillMount () {
    getPlacesLeft(this)
  }
  render () {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={() => (<Main placesLeft={this.state.placesLeft} />)} />
            <Route path='/join' component={SchoolPicker} />
            <Route path='/school/:schoolId' component={({...rest}) => (<School placesLeft={this.state.placesLeft} {...rest} />)} />
            <Route path='/export' component={Export} />
          </div>
        </Router>
      </div>
    )
  }
}

export default MainCtrl
