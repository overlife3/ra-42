import { SEARCH_ITEM } from "./actions"
const initialState = ''

export function filterReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_ITEM:
				return action.payload
		
		default:
			return state
	}
}