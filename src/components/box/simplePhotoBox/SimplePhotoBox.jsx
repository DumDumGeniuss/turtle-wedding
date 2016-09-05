import React from 'react'
import config from '../../../constants/config'
import {Link} from 'react-router'

if (process.env.BROWSER) {
    require('./SimplePhotoBox.css')
}

export default class SimplePhotoBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoClass: 'SimplePhotoBox-photo'
        }
    }
	render() {
		const self = this
		let props = self.props  
		let photo = props.photo
		// <a className="SimplePhotoBox-photoLink" href="http://www.mitie.com/media-library/services/specialist-services/pest-control/pest-photos/cockroach.jpg">
		return (
			<div className="SimplePhotoBox-mainArea">
				<div className="SimplePhotoBox-deleteIcon">{this.props.children}</div>
				<Link to={"/photos/slide?photoId=" + photo._id}>
					<img className={self.state.photoClass} src={config.apiUrl + '/files/photos/' + photo.fileName}/>
				</Link>
			</div>
		)
	}
}
