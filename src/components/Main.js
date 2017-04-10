import React, {
  Component
}
from 'react'
import '../css/main.css'
import '../css/font-awesome.min.css'
import Clock from './Clock'
import BackToTop from './BackToTop'
import GalleryScroll from './GalleryScroll'

const imgGroup = require('../images/Group.jpg')
const logo = require('../images/logo.png')

const deadline = 'June 1 2017 08:00:00 UTC+0800'

class Main extends Component {
  render () {
    return (
      <div className='Main'>
        <div id='page-wrapper'>
          <div id='header'>
            <div className='inner'>
              <header className='main-header'>
                <h1 id='logo'>Primary School Green Camp </h1>
                <hr />
                <p>June 1, 2017 | {this.props.placesLeft === '...' ? <span><i className='fa fa-circle-o-notch fa-spin fa-fw' /> Checking Availability</span> : (this.props.placesLeft > 0 ? `${this.props.placesLeft} places remain` : 'Fully registered') }</p>
              </header>
              <div>
                <div className='button-wrap'>
                  <a href='/signup' className='animated-button signup-btn'>Sign up</a>
                  <a href='/join' className='animated-button login-btn'>Login</a>
                </div>
              </div>
            </div>

            <nav id='nav'>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#carousel'>Activities</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='/signup'>Signup</a></li>
                <li><a href='/join'>Login</a></li>
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
            <div className='logo-container'>
              <div><img src={logo} alt='' width='100%' /></div>
            </div>
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
              What is a carbon footprint? It is the total amount of greenhouse gases produced to support human activities, usually expressed in equivalent tons of
              carbon dioxide (CO2). Despite contributing a mere 0.11% of global emissions, Singapore ranks 26th out of 142 countries in terms of emissions per capita. Such worrying statistics suggest that more could be done by us Singaporeans to conserve Mother Nature.
              It's high time to take charge of the environment and reduce our carbon footprint, one step at a time!
              <br />
                <br />
							Organised by Hwa Chong Green Council, the Primary School Green Camp aims to introduce primary school students to the pertinent environmental issues and prepare them to be responsible stewards of the environment. Join the camp today for an enthralling and meaningful experience that you will never forget! See you there!
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
                    <p>Send us a message on these social media platforms:</p>
                    <ul className='icons'>
                      <li><a href='https://www.facebook.com/hcgreenmovement/' className='icon fa-facebook'><span className='label'>Facebook</span></a></li>
                      <li><a href='https://www.instagram.com/hc_green_council/' className='icon fa-instagram'><span className='label'>Instagram</span></a></li>
                    </ul>
                  </section>

                  <div className='copyright'>
                    <ul className='menu'>
                      <li>&copy; HCGC | R3:C0D3. All rights reserved.</li>
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
