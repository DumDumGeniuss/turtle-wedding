import React from 'react'

import Pause from 'react-icons/lib/fa/pause'
import Play from 'react-icons/lib/fa/play'

if (process.env.BROWSER) {
    require('./Profile.css')
}

class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            starWarScrollMarginTop: 0,
            starWarViewRotate: 0,
            movieStatus: true
        }
        this.killScroll = this.killScroll.bind(this)
        this.startScroll = this.startScroll.bind(this)
    }
    componentDidMount() {
        const self = this

        self.startWarsAudio =document.getElementById('star-wars-audio')

        self.starWarScrollHeight = document.getElementById('star-war-scroll').getBoundingClientRect().height
        self.starWarViewHeight = document.getElementById('star-war-view').getBoundingClientRect().height

        self.initialStarWarsScroll()
        
        self.startScroll()
    }
    componentWillUnmount() {
        const self = this
        self.killScroll()
        // self.autoPalyStarWarsAudio()
    }
    initialStarWarsScroll() {
        const self = this
        self.setState({
            starWarScrollMarginTop: self.starWarViewHeight*0.70,
            starWarViewRotate: 30
        })
    }
    startStarWarsAudio() {
        const self = this
        self.startWarsAudio.play()
    }
    pausePauseWarsAudio() {
        const self = this
        self.startWarsAudio.pause()
    }
    startScroll() {
        const self = this
        self.scrollInterval = setInterval(function() {
            self.setState({
                starWarScrollMarginTop: self.state.starWarScrollMarginTop - 1,
                movieStatus: true
            })
            if(self.state.starWarScrollMarginTop < -self.starWarScrollHeight-50 ) {
                self.killScroll()
                self.initialStarWarsScroll()
            }
        }, 30)
        self.startStarWarsAudio()
    }
    killScroll() {
        const self = this
        window.clearInterval(this.scrollInterval)
        self.setState({
            movieStatus: false
        })
        self.pausePauseWarsAudio()
    }
	render() {
        const self = this
		return (
			<div className="Profile-mainArea">
                <img className="Profile-backgroundImg" src="assets/images/universe.jpg"/>
                <audio id="star-wars-audio" className="Profile-starWarsAudio" autoPlay loop>
                  <source src="assets/audios/starwars.mp3" type="audio/mpeg"/>
                </audio>
                <div className="Profile-functionIcon Profile-pauseIcon" style={ {display: self.state.movieStatus?'initial':'none'} } onClick={self.killScroll}>
                    <Pause />
                </div>
                <div className="Profile-functionIcon Profile-playIcon" style={ {display: !self.state.movieStatus?'initial':'none'} } onClick={self.startScroll}>
                    <Play />
                </div>
                <div id="star-war-view" style={ {transform: 'rotateX(' + self.state.starWarViewRotate + 'deg)'} } className="Profile-starWarView">
                    <div id="star-war-scroll" className="Profile-starWarScroll" style={{marginTop: self.state.starWarScrollMarginTop + 'px'}}>
                        <h1 className="Profile-h1">Hello</h1>
                        <span className="Profile-span">Welcome to my blog,</span>
                        <span className="Profile-span">Glad to see you, Without any further</span>
                        <span className="Profile-span">Let's introduce myself.</span>

                        <h1 className="Profile-h1">Profile</h1>
                        <span className="Profile-span">DumDumGenius</span>
                        <span className="Profile-span">A.K.A</span>
                        <span className="Profile-span">Messi Yang</span>
                        <span className="Profile-span">Born in Taiwan, 1991</span>
                        <span className="Profile-span">Full-Stack web develop</span> 

                        <h1 className="Profile-h1">Education</h1>
                        <span className="Profile-span">Taichung First Senior High School</span>
                        <span className="Profile-span">National Chiao Tung University</span>

                        <h1 className="Profile-h1">Language</h1>
                        <span className="Profile-span">1. Chiese</span>
                        <span className="Profile-span">2. Japanese</span>
                        <span className="Profile-span">3. English</span>

                        <h3 className="Profile-h3">Frontend Web Technique</h3>
                        <span className="Profile-span">1. ReactJS plus Redux</span>
                        <span className="Profile-span">2. AngularJS</span>
                        <span className="Profile-span">3. Automation with Gulp, Webpack</span>
                        <span className="Profile-span">4. Design Awesome view with CSS3</span>
                        <span className="Profile-span">5. 3rd-party Library, like FB, Google </span>

                        <h3 className="Profile-h3">Backend Web Technique</h3>
                        <span className="Profile-span">1. Java & SpringMVC</span>
                        <span className="Profile-span">2. Ruby on Rails</span>
                        <span className="Profile-span">3. Node & Express</span>
                        <span className="Profile-span">4. RestfulAPI design</span>
                        <span className="Profile-span">5. Application Auto-Deployment</span>
                        <span className="Profile-span">6. Server Side Rendering</span>
                        <span className="Profile-span">7. Test Driven Development</span>
                        <span className="Profile-span">8. Postgresql, MySql Database Design</span>
                        <span className="Profile-span">9. Build Amazone EC2 & Nginx Server</span>

                        <h3 className="Profile-h3">Contact Me</h3>
                        <span className="Profile-span">dumdumgenius@gmail.com</span>
                        <span className="Profile-span">https://www.facebook.com/dumdumgenius</span>
                        <span className="Profile-span">https://github.com/DumDumGeniuss</span>
                    </div>
                </div>
            </div>
        )
	}
}

export default Profile