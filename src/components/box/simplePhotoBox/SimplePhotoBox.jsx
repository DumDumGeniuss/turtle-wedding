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
		let photoWidth = props.photoWidth
		let photoHeight = props.photoHeight
		console.log(photoHeight)

		return (
			<div className="SimplePhotoBox-mainArea" style={ {width: photoWidth, height: photoHeight} }>
				<img className="SimplePhotoBox-photo" src={config.apiUrl + '/files/photos/' + photo.fileName}/>
			</div>
		)
	}
}
