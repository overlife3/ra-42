import { EDITING_FORM, FILTERING_FORM } from './actions'

const initialState = {
	editing: false,
	filtering: false
}

/* 
ACTION
{
	type: '',
	payload: bool,
}
*/

export const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case EDITING_FORM: 
			return {
				...state,
				editing: action.payload
			}
		case FILTERING_FORM:
			return {
				...state,
				filtering: action.payload
			}
		default:
			return state
	}
}