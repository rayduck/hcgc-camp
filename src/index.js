import React from 'react'
import { render } from 'react-dom'

import MainCtrl from './MainCtrl'

const Root = () => (
  <MainCtrl />
    )

render(<Root />, document.querySelector('#main'))
