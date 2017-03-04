import React from 'react'
import { render } from 'react-dom'
import './css/style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SchoolPicker from './components/SchoolPicker'
import School from './components/School'
import Admin from './components/Admin'
import Main from './components/Main'

const Root = () => (
  <Router>
    <div>
      <Route exact path='/' component={Main} />
      <Route path='/join' component={SchoolPicker} />
      <Route path='/school/:schoolId' component={School} />
      <Route path='/admin' component={Admin} />
    </div>
  </Router>
)

render(<Root />, document.querySelector('#main'))
