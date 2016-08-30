import React from 'react'

import Facebook from 'react-icons/lib/fa/facebook'
import Github from 'react-icons/lib/fa/github'
import Twitter from 'react-icons/lib/fa/twitter'
import Google from 'react-icons/lib/fa/google'

import MoonO from 'react-icons/lib/fa/moon-o'
import SunO from 'react-icons/lib/fa/sun-o'
import Globe from 'react-icons/lib/fa/globe'
import Cloud from 'react-icons/lib/fa/cloud'
import Home from 'react-icons/lib/fa/home'
import Star from 'react-icons/lib/fa/star'

if (process.env.BROWSER) {
    require('./Welcome.css')
}

class Welcome extends React.Component {
	render() {
		return (
			<div className="Welcome-mainArea">
                <div className='Welcome-universeBackgroundArea'>
                    <span className="Welcome-centerText">DumDumGenius' Blog</span>
                    <div className="Welcome-logoArea">
                        <a href="https://www.facebook.com/dumdumgeniusblog/">
                            <Facebook className="Welcome-faIcon"/>
                        </a>
                        <a href="https://github.com/DumDumGeniuss">
                            <Github className="Welcome-faIcon"/>
                        </a>
                        <a href="https://www.facebook.com/dumdumgeniusblog/">
                            <Twitter className="Welcome-faIcon"/>
                        </a>
                        <a href="https://www.facebook.com/dumdumgeniusblog/">
                            <Google className="Welcome-faIcon"/>
                        </a>
                    </div>
                    <Globe className="Welcome-Earth"/>
                    <div className="Welcome-SunAndMoon">
                        <MoonO className="Welcome-MoonO"/>
                        <SunO className="Welcome-SunO"/>
                    </div>
                    <div className="Welcome-night">
                    	<Star className="Welcome-star Welcome-star-1"/>
                    	<Star className="Welcome-star Welcome-star-2"/>
                    	<Star className="Welcome-star Welcome-star-3"/>
                    	<Star className="Welcome-star Welcome-star-4"/>
                    	<Star className="Welcome-star Welcome-star-5"/>
                    </div>
                    <div className="Welcome-day">
                    	<Cloud className="Welcome-cloud Welcome-cloud-1"/>
                    	<Cloud className="Welcome-cloud Welcome-cloud-2"/>
                    	<Cloud className="Welcome-cloud Welcome-cloud-3"/>
                    	<Cloud className="Welcome-cloud Welcome-cloud-4"/>
                    	<Cloud className="Welcome-cloud Welcome-cloud-5"/>
                    </div>
                </div>
            </div>
        )
	}
}

export default Welcome