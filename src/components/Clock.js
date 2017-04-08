import React, { Component } from 'react'

class Clock extends Component {
  constructor () {
    super()
    this.setTime = this.setTime.bind(this)
    this.state = {}
  }
  componentWillMount () {
    this.setTime()
  }
  componentDidMount () {
    if (Date.parse(this.props.deadline) - Date.parse(new Date()) > 0) {
      this.timerID = setInterval(() => {
        this.setTime()
      }, 1000)
    }
  }
  componentWillUnmount () {
    if (this.timerID) clearInterval(this.timerID)
  }
  setTime () {
    const totalTime = Date.parse(this.props.deadline) - Date.parse(new Date())
    if (totalTime > 0) {
      const seconds = Math.floor((totalTime / 1000) % 60)
      const minutes = Math.floor((totalTime / 1000 / 60) % 60)
      const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24)
      const days = Math.floor(totalTime / (1000 * 60 * 60 * 24))
      this.setState({
        totalTime,
        seconds,
        minutes,
        hours,
        days
      })
    }
  }
  render () {
    if (this.state.totalTime > 0) {
      return (
        <div id='clockdiv'>
          <div>
            <div>
              <span className='days'>{`0${this.state.days}`.slice(-2)}</span>
              <div className='smalltext'>days</div>
            </div>
            <div>
              <span className='hours'>{`0${this.state.hours}`.slice(-2)}
              </span>
              <div className='smalltext'>hours</div>
            </div>
          </div>
          <div>
            <div>
              <span className='minutes'>{`0${this.state.minutes}`.slice(-2)}
              </span>
              <div className='smalltext'>minutes</div>
            </div>
            <div>
              <span className='seconds'>{`0${this.state.seconds}`.slice(-2)}
              </span>
              <div className='smalltext'>seconds</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Enjoy your camp!</h2>
        </div>
      )
    }
  }
}

export default Clock
