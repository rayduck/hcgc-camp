import React, {
    Component
}
from 'react'

class GalleryScroll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      AR: [require('../images/AR.jpg'), require('../images/AR2.jpg'), require('../images/AR.jpg')],
      IB: [require('../images/IB.jpg'), require('../images/IB2.jpg'), require('../images/IB3.jpg')],
      DIY: [require('../images/DIY.jpg'), require('../images/DIY2.jpg'), require('../images/DIY3.jpg')],
      Movie: [require('../images/Movie.jpg'), require('../images/Movie2.jpg'), require('../images/Movie3.jpg')],
      imageID: 0
    }
  }
  componentWillMount () {
    this.timerID = setInterval(() =>
            this.changeImage(), 3500
        )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  changeImage () {
    var a = this.state.imageID
    if (a < 2) {
      a++
    } else {
      a -= 2
    }

    this.setState({
      imageID: a
    })
  }

  render () {
    return (
      <div className='reel'>
        <div className='inner-wraps'>
          <article>
            <a className='image featured'><img src={this.state.IB[this.state.imageID]} alt='' /></a>
            <header>
              <h3><a>Icebreakers</a></h3>
            </header>
            <p>Enjoy a few games along with their assigned facilitators!</p>
          </article>

          <article>
            <a className='image featured'><img src={this.state.AR[this.state.imageID]} alt='' /></a>
            <header>
              <h3><a>Amazing Race</a></h3>
            </header>
            <p>Grouped into teams and play educational games.</p>
          </article>
        </div>
        <div className='inner-wraps'>
          <article>
            <a className='image featured'><img src={this.state.DIY[this.state.imageID]} alt='' /></a>
            <header>
              <h3><a>Do-It-Yourself Workshop</a></h3>
            </header>
            <p>Behold the power of upcycling! DIY a personal terrarium.</p>
          </article>

          <article>
            <a className='image featured'><img src={this.state.Movie[this.state.imageID]} alt='' /></a>
            <header>
              <h3><a>Movie Time & Discussion</a></h3>
            </header>
            <p>Watch films and discuss about environmental issues</p>
          </article>
        </div>
      </div>
    )
  }
}

export default GalleryScroll
