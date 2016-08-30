import { paintingActionTypes } from '../constants/ActionTypes'

let initState = {
	paintings: []
}

export default function counter(state = initState, action) {
	switch (action.type) {
		case paintingActionTypes.INIT_PAINTINGS:
			return Object.assign({}, state, {paintings: action.paintings})
		default:
			return state
	}
}