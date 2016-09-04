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
				<img className="SimplePhotoBox-photo" src={config.apiUrl + '/files/photos/' + photo.fileName}/>
			</div>
		)
	}
}
