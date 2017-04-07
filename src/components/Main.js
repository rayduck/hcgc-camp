import React, {
  Component
}
from 'react'
import '../css/main.css'
import '../css/font-awesome.min.css'
import Clock from './Clock'
import BackToTop from './BackToTop'
import GalleryScroll from './GalleryScroll'
import base from '../base'

var imgGroup = require('../images/Group.jpg')

const deadline = 'June 1 2017 08:00:00 UTC+0800'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      placesLeft: '...'
    }
  }
  componentWillMount () {
    base.fetch('/', { context: this })
      .then(data => {
        console.log(data)
        const maxStudents = 420
        let studentCount = 0
        for (let school of Object.keys(data)) {
          if (data[school].students) {
            studentCount += Object.keys(data[school].students).length
          }
        }
        this.setState({placesLeft: maxStudents - studentCount})
      })
  }
  render () {
    return (
      <div className='Main'>
        <div id='page-wrapper'>
          <div id='header'>
            <div className='inner'>
              <header>
                <h1 id='logo'>Primary School Green Camp</h1>
                <hr />
                <p>June 1, 2017 | {this.state.placesLeft} places available</p>
              </header>
              <footer>
                <a href='/join' className='button circled scrolly'>Register</a>
              </footer>
            </div>

            <nav id='nav'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#carousel'>Activities</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='/join'>Register</a></li>
              </ul>
            </nav>

          </div>
          <section id='banner'>
            <header>
              <h2>
							Days to <strong>GREEN CAMP@2017</strong>:
              </h2>
              <Clock deadline={deadline} />
            </header>
          </section>
          <BackToTop />
          <section className='carousel' id='carousel'>
            <GalleryScroll />
          </section>

          <div className='wrapper style2'>

            <article id='main' className='container special'>
              <a className='image featured'><img src={imgGroup} alt='' /></a>
              <header id='about'>
                <h2>About the Camp</h2>
                <p>
								Reducing your carbon footprint
							</p>
              </header>
              <p>
              What is a carbon footprint? It is the total amount of greenhouse gases produced to directly and indirectly support human activities, usually expressed in equivalent tons of
              carbon dioxide (CO2). Despite only contributing around 0.11% of global emissions, Singapore ranks 26th out of 142 countries in terms of emissions per capita. This means that Singaporeans are not
              as environmentally-friendly as we should be.
              Thankfully, this problem can easily be rectified by making adjustments to our daily habits.
              <br />
                <br />
							Organised by Hwa Chong Green Council, we wish to expose primary school students to the various environmental issues that we face, and educate them on what they can do to make a change. Join the camp today for a fulfilling experience that you will never forget! See you there!
						</p>
              <footer>
                <a href='/join' className='button'>Register Now!</a>
              </footer>
            </article>

          </div>

          <div className='map'>
            <iframe width='100%' height='100%' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7500027232454!2d103.80099821475402!3d1.3259310990329338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10a098cda40f%3A0x1765c81afbc57c06!2sHwa+Chong+Institution!5e0!3m2!1sen!2ssg!4v1490495954480' />
          </div>

          <div id='footer'>
            <div className='container'>
              <div className='row' />
              <div className='12u'>
                <section className='contact'>
                  <header>
                    <h3>"Be the change that you wish to see in the world.”
								~Mahatma Gandhi</h3>
                  </header>
                </section>
              </div>
              <hr />
              <div className='row'>
                <div className='12u'>
                  <section className='contact'>
                    <header>
                      <h3>Any burning questions?</h3>
                    </header>
                    <p>Send us a message on any of these social media platforms:</p>
                    <ul className='icons'>
                      <li><a href='https://www.facebook.com/hcgreenmovement/' className='icon fa-facebook'><span className='label'>Facebook</span></a></li>
                      <li><a href='https://www.instagram.com/hc_green_council/' className='icon fa-instagram'><span className='label'>Instagram</span></a></li>
                    </ul>
                  </section>

                  <div className='copyright'>
                    <ul className='menu'>
                      <li>&copy; HCGC | R3:C0D3. All rights reserved.</li>
                      <li>Design: <a href='http://html5up.net'>HTML5 UP</a></li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main
