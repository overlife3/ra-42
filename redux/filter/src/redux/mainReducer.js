import { CHANGE_ITEM, REMOVE_ITEM, SAVE_ITEM } from "./actions"

const initialState = []

/* 
ACTION:
	{
		type: CHANGE_ITEM,
		payload: obj
	}

OBJ:
	{
		id: '',
		name: '',
		price: ''
	}

*/

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_ITEM:
			return [
				...state, action.payload
			]
		case REMOVE_ITEM:
			return state.filter(item => item.id !== action.payload)
		case CHANGE_ITEM:
			return state.map(item => {
				if (item.id === action.payload.id) {
					item = {
						...item,
						name: action.payload.name,
						price: action.payload.price
					}
				}
				return item
			})

		default: 
			return state
	}
} 

export default mainReducer