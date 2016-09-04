import { photosActionTypes } from '../constants/ActionTypes'
import config from '../constants/config' 
import es6Promise from 'es6-promise'
import url from 'url'
import 'isomorphic-fetch'

export function addPhoto(photo) {
	const data = new FormData();
	data.append("content", photo.content);
	data.append("sequence", photo.sequence);
	data.append("photo", photo.photo);
	// return function(dispatch) {
		let params = {
			method: 'POST',
			body: data
		};

		fetch(config.apiUrl + '/photos', params)
		.then(res => {
			console.log(res)
			// dispatch(addArticleOptimistic());
		}).catch(err => {
			console.log(err)
		})
	// }
}

export function deletePhoto(id) {
	let params = {
		method: 'DELETE'
	};
	fetch(config.apiUrl + '/photos/' +  id, params)
	.then(res => {
		console.log(res)
	}).catch(err => {
		console.log(err)
	})
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