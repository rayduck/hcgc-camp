import React, {
    Component
}
from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="fixed-nav-bar">
        <div className="pull-left">
        Green Camp 2017
        </div>
      <div className="pull-right">
        <a href="#"><i className="fa fa-3x fa-sign-out fa-inverse"></i></a>
      </div>
    </div>
        )
    }
}

export default Navbar
