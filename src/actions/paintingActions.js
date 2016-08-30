import { paintingActionTypes } from '../constants/ActionTypes'

export function initPaintings(paintings) {
	return {
		type: paintingActionTypes.INIT_PAINTINGS,
		paintings
	}
}

export function addPainting() {
	return {
		type: paintingActionTypes.ADD_PAINTING
	}
}