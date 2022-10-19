import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
	name: "photos",
	initialState: [],
	reducers: {
		addPhoto(state, action) {
			state.push(action.payload)
		}
	}
})

/*
	action.payload = {
		id: (0 - ...) ,
		url: ... 
	}
*/

export const actions = photosSlice.actions
export default photosSlice.reducer