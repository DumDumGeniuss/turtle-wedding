import { photosActionTypes } from '../constants/ActionTypes'
import config from '../constants/config' 
import es6Promise from 'es6-promise'
import url from 'url'
import 'isomorphic-fetch'

export function addPhotoOptimistic(photo) {
	return {
		type: photosActionTypes.ADD_PHOTO,
		photo
	}
}

export function addPhoto(photo) {
	const data = new FormData();
	let photos = photo.photo;
	for(var key in photos) {
		data.append("photo", photos[key]);
	}
	// return function(dispatch) {
		let params = {
			method: 'POST',
			body: data
		};

		fetch(config.apiUrl + '/photos', params)
		.then(res => {
			console.log(res)
			// dispatch(addPhotoOptimistic());
		}).catch(err => {
			console.log(err)
		})
	// }
}

export function deletePhotoOptimistic(photoId) {
	return {
		type: photosActionTypes.DELETE_PHOTO,
		photoId
	}
}

export function deletePhoto(id) {
	let params = {
		method: 'DELETE'
	};
	return function(dispatch) {
		fetch(config.apiUrl + '/photos/' +  id, params)
		.then(res => {
			dispatch(deletePhotoOptimistic(id))
		}).catch(err => {
			console.log(err)
		})
	}
}

export function queryPhotosOptimistic(photos) {
	return {
		type: photosActionTypes.QUERY_PHOTOS,
		photos
	}
}

export function queryPhotos(params) {
	let queryString = url.format({
		query: params
	})
	return function(dispatch) {
		fetch(config.apiUrl + '/photos' + queryString, {
			method: 'get'
		}).then(res => {
			return res.json()
		}).then(result => {
			dispatch(queryPhotosOptimistic(result.data))
		}).catch(err => {
			console.log(err)
		})
	}
}