import { createSlice } from "@reduxjs/toolkit";

const itemReducer = createSlice({
	name: 'item',
	initialState: {
		item: undefined,
		loading: false,
		error: null
	},
	reducers: {
		detailsRequest(state, { payload }) {
			return { ...state, loading: true, error: null}
		},
		detailsFailure(state, { payload }) {
			const error = payload
			return {...state, loading: false, error}
		},
		detailsSuccess(state, { payload }) {
			const item = payload
			return { item, loading: false, error: null}
		},

	}
})
export const actionsItem = itemReducer.actions
export default itemReducer.reducer