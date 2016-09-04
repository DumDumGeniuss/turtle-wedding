import { photosActionTypes } from '../constants/ActionTypes'

let initState = {
	photos: [],
	photo: {}
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case photosActionTypes.QUERY_PHOTOS:
			return Object.assign({}, state, {photos: action.photos})
		default:
			return state
	}
}