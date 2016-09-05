import { photosActionTypes } from '../constants/ActionTypes'

let initState = {
	photos: [],
	photo: {}
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case photosActionTypes.QUERY_PHOTOS:
			return Object.assign({}, state, {photos: action.photos})
		case photosActionTypes.DELETE_PHOTO:
			let photos = state.photos
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