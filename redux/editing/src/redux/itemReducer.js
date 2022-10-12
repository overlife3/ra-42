import { SET_ITEM } from "./actions"

export const itemReducer = (state = null, action) => {
	switch	(action.type) {
		case SET_ITEM:
			return action.payload
		
		default:
			return state
	}
}