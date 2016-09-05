import React from 'react'
import config from '../../../constants/config'

if (process.env.BROWSER) {
    require('./SimplePhotoBox.css')
}

export default class SimplePhotoBox extends React.Component {
	render() {
		const self = this
		let props = self.props  
		let photo = props.photo

		return (
			<div className="SimplePhotoBox-mainArea">
				<div className="SimplePhotoBox-deleteIcon">{this.props.children}</div>
				<a className="SimplePhotoBox-photoLink" href="http://www.mitie.com/media-library/services/specialist-services/pest-control/pest-photos/cockroach.jpg">
					<img className="SimplePhotoBox-photo" src={config.apiUrl + '/files/photos/' + photo.fileName}/>
				</a>
			</div>
		)
	}
}
