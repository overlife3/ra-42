import { createSlice } from "@reduxjs/toolkit";

const listReducer = createSlice({
	name: 'list',
	initialState: {
		items: [],
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
			const items = payload
			return { items, loading: false, error: null}
		}
	}
})
export const actions = listReducer.actions
export default listReducer.reducer