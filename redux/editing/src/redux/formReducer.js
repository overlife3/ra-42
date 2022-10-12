import { EDITING_FORM } from './actions'

const initialState = false

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
			return action.payload
			
		default:
			return state
	}
}