import React from 'react'
import config from '../../../constants/config'

if (process.env.BROWSER) {
    require('./PhotoList.css')
}

export default class PhotoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
	render() {
		const self = this
		let props = self.props  
		let photos = props.photos
		// <a className="SimplePhotoBox-photoLink" href="http://www.mitie.com/media-library/services/specialist-services/pest-control/pest-photos/cockroach.jpg">
		return (
			<div className="PhotoList-mainArea">
			</div>
		)
	}
}
