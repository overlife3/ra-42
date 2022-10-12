export const SAVE_ITEM = "SAVE_ITEM" 
export const REMOVE_ITEM = "REMOVE_ITEM" 
export const CHANGE_ITEM = "CHANGE_ITEM" 

export const EDITING_FORM = "EDITING_FORM"  

export const SET_ITEM = "SET_ITEM" 




export const saveItem = (obj) => {
	return {
		type: SAVE_ITEM,
		payload: obj
	}
}

export const removeItem = (id) => {
	return {
		type: REMOVE_ITEM,
		payload: id
	}
}

export const changeItem = (obj) => {
	return {
		type: CHANGE_ITEM,
		payload: obj
	}
}

export const editingForm = (bool) => {
	return {
		type: EDITING_FORM,
		payload: bool
	}
}


export const setEditItem = (obj) => {
	return {
		type: SET_ITEM,
		payload: obj
	}
}