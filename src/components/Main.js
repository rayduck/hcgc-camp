import React, { Component } from 'react'
import '../html/assets/css/main.css'
import '../html/assets/css/font-awesome.min.css'

var imgIB = require('../html/images/IB.jpg')
var imgAR = require('../html/images/AR.jpg')
var imgDIY = require('../html/images/DIY.jpg')
var imgMovie = require('../html/images/Movie.jpg')
var imgGroup = require('../html/images/Group.jpg')

class Main extends Component {
  constructor () {
    super()
  }
  render () {
    return (
		<div className="Main">
				<div id="header">
					<div className="inner">
						<header>
							<h1 id="logo">Primary School Green Camp</h1>
							<hr />
							<p>June 1, 2017</p>
						</header>
						<footer>
							<a href="#banner" className="button circled scrolly">More</a>
						</footer>
					</div>

					<nav id="nav">
						<ul>
							<li><a href="#">Home</a></li>
							<li><a href="#carousel">Activities</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#">Register</a></li>
						</ul>
					</nav>

				</div>
				<section id="banner">
					<header>
						<h2>
							Days to <strong>GREEN CAMP@2017</strong>:
							
						</h2>
						<p>
							<div id="clockdiv">
								<div>
									<span className="days"></span>
									<div className="smalltext">Days</div>
								</div>
								<div>
									<span className="hours"></span>
									<div className="smalltext">Hours</div>
								</div>
								<div>
									<span className="minutes"></span>
									<div className="smalltext">Minutes</div>
								</div>
								<div>
									<span className="seconds"></span>
									<div className="smalltext">Seconds</div>
								</div>
							</div>
						</p>
					</header>
				</section>

				<section className="carousel" id="carousel">
					<div className="reel">

						<article>
							<a className="image featured"><img src={imgIB} alt="" /></a>
							<header>
								<h3><a>Icebreakers</a></h3>
							</header>
							<p>Enjoy a few games along with their assigned facilitators!</p>
						</article>

						<article>
							<a className="image featured"><img src={imgAR} alt="" /></a>
							<header>
								<h3><a>Amazing Race</a></h3>
							</header>
							<p>Grouped into teams and visit booths around the school to play educational games.</p>
						</article>

						<article>
							<a className="image featured"><img src={imgDIY} alt="" /></a>
							<header>
								<h3><a>Do-It-Yourself Workshop</a></h3>
							</header>
							<p>Behold the power of upcycling! DIY a personal terrarium.</p>
						</article>

						<article>
							<a className="image featured"><img src={imgMovie}alt="" /></a>
							<header>
								<h3><a>Movie Time & Discussion</a></h3>
							</header>
							<p>Watch a movie and discuss their thoughts to bring awareness to environmental conservation.</p>
						</article>
						<article>
							<a className="image featured"><img src={imgIB} alt="" /></a>
							<header>
								<h3><a>Icebreakers</a></h3>
							</header>
							<p>Enjoy a few games along with their assigned facilitators!</p>
						</article>

						<article>
							<a className="image featured"><img src={imgAR} alt="" /></a>
							<header>
								<h3><a>Amazing Race</a></h3>
							</header>
							<p>Grouped into teams and visit booths around the school to play educational games.</p>
						</article>

						<article>
							<a className="image featured"><img src={imgDIY} alt="" /></a>
							<header>
								<h3><a>Do-It-Yourself Workshop</a></h3>
							</header>
							<p>Behold the power of upcycling! DIY a personal terrarium.</p>
						</article>

						<article>
							<a className="image featured"><img src={imgMovie} alt="" /></a>
							<header>
								<h3><a>Movie Time & Discussion</a></h3>
							</header>
							<p>Watch a movie and discuss their thoughts to bring awareness to environmental conservation.</p>
						</article>


					</div>
				</section>

				<div className="wrapper style2">

					<article id="main" className="container special">
						<a className="image featured"><img src={imgGroup} alt="" /></a>
						<header  id="about">
							<h2>About the Camp</h2>
							<p>
								"Be the change that you wish to see in the world.” 
								~Mahatma Gandhi
							</p>
						</header>
						<p>
							Organised by Hwa Chong Green Council, we wish to expose primary school students to the various environmental issues that we face, and educate them on what they can do to make a change. Through greater environmental awareness, we aim to strive to greater
							heights. Join the camp today for a fulfilling experience that you will never forget! See you there!
						</p>
						<footer>
							<a href="#" className="button">Register Now!</a>
						</footer>
					</article>

				</div>

				<div className="map">
					<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7500027232454!2d103.80099821475402!3d1.3259310990329338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10a098cda40f%3A0x1765c81afbc57c06!2sHwa+Chong+Institution!5e0!3m2!1sen!2ssg!4v1490495954480"></iframe>
				</div>

				<div id="footer">
					<div className="container">
						<div className="row">

							<section className="4u 12u(mobile)">
								<header>
									<h2 className="icon fa-train circled"><span className="label">Train</span></h2>
								</header>
								<ul className="divided">
									<li>
										<article className="post stub">
											<header>
												<h3><a>Tan Kah Kee MRT Station (Downtown Line DT8)</a></h3>
											</header>
										</article>
									</li>
									<li>
										<article className="post stub">
											<header>
												<h3><a>Enter via gate next to the MRT station</a></h3>
											</header>
										</article>
									</li>
								</ul>
							</section>

							<section className="4u 12u(mobile)">
								<header>
									<h2 className="icon fa-bus circled"><span className="label">Bus</span></h2>
								</header>
								<ul className="divided">
									<li>
										<article className="post stub">
											<header>
												<h3><a>66, 67, 74, 151, 154, 156, 157, 170, 171, 174, 852,  961</a></h3>
											</header>
										</article>
									</li>
									<li>
										<article className="post stub">
											<header>
												<h3><a>Alight at Hwa Chong JC (Bus Stop No. 41051)</a></h3>
											</header>
										</article>
									</li>
								</ul>
							</section>

							<section className="4u 12u(mobile)">
								<header>
									<h2 className="icon fa-car circled"><span className="label">Car</span></h2>
								</header>
								<ul className="divided">
									<li>
										<article className="post stub">
											<header>
												<h3><a>Drive along Bukit Timah Road towards HCI</a></h3>
											</header>
										</article>
									</li>
									<li>
										<article className="post stub">
											<header>
												<h3><a>Make a left turn into Gate 2 after Duchess Road</a></h3>
											</header>
										</article>
									</li>
								</ul>
							</section>

						</div>
						<hr />
						<div className="row">
							<div className="12u">
								<section className="contact">
									<header>
										<h3>Any burning questions?</h3>
									</header>
									<p>Send us a message on any of these social media platforms:</p>
									<ul className="icons">
										<li><a href="https://www.facebook.com/hcgreenmovement/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
										<li><a href="https://www.instagram.com/hc_green_council/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
									</ul>
								</section>

								<div className="copyright">
									<ul className="menu">
										<li>&copy; HCGC | R3:C0D3. All rights reserved.</li>
										<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
									</ul>
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
