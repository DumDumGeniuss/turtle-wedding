import React from 'react'
import SimplePhotoBox from '../box/simplePhotoBox/SimplePhotoBox.jsx'
import {Link} from 'react-router'
import Star from 'react-icons/lib/fa/star'

if (process.env.BROWSER) {
    require('./DisplayPhotos.css')
}

export default class DisplayPhotos extends React.Component {
	render() {
		const self = this
		let photos = self.props.photos
		console.log(photos)
		return (
			<div className="DisplayPhotos-mainArea">
				<Link className="DisplayPhotos-addPhoto" to={'/photos/create'}>
					<Star />
				</Link>
				<div className="DisplayPhotos-photosArea">
					{
						photos.map( (item) => {
							return (
								<SimplePhotoBox photo={item}/>
							)
						})
					}
				</div>
			</div>
		)
	}
}
