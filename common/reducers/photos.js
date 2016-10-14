import { photosActionTypes } from '../constants/ActionTypes'

let initState = {
	photos: [],
	photo: {}
}

export default function counter(state = initState, action) {
	let photos = state.photos
	switch (action.type) {
		case photosActionTypes.QUERY_PHOTOS:
			return Object.assign({}, state, {photos: action.photos})
		case photosActionTypes.ADD_PHOTO:
			photos.push(action.photo)
			return Object.assign({}, state, {photos: photos})
		case photosActionTypes.DELETE_PHOTO:
			for(let i in photos) {
				if(photos[i]._id == action.photoId) {
					photos.splice(i, 1);
				}
			}
			return Object.assign({}, state, {photos: photos})
		default:
			return state
	}
}