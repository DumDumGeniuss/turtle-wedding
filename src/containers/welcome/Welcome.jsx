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
                <div className="Welcome-mainPhotoBlock">
                    <img className="Welcome-mainPhoto Welcome-mainPhoto-1" src="https://img.alicdn.com/imgextra/i3/353930884/TB2zOQqcFXXXXaMXXXXXXXXXXXX_!!353930884.jpg"/>
                    <img className="Welcome-mainPhoto  Welcome-mainPhoto-2" src="https://img.alicdn.com/imgextra/i4/353930884/TB2kF.ocFXXXXb5XXXXXXXXXXXX_!!353930884.jpg"/>
                    <img className="Welcome-mainPhoto  Welcome-mainPhoto-3" src="https://img.alicdn.com/imgextra/i1/353930884/TB2GuojcFXXXXcUXXXXXXXXXXXX_!!353930884.jpg"/>
                    <img className="Welcome-mainPhoto  Welcome-mainPhoto-4" src="https://img.alicdn.com/imgextra/i2/353930884/TB2jr3ecFXXXXXCXpXXXXXXXXXX_!!353930884.jpg"/>
                    <span className="Welcome-slideText">Welcome to our XXXXXXX</span>
                </div>
            </div>
        )
	}
}

export default Welcome