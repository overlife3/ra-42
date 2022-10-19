import { createReducer } from "@reduxjs/toolkit";
import { setNumber } from "./actions";


const initialState = {
	value: undefined
}

export const numberReducer = createReducer(initialState, (builder) => {
	builder.addCase(setNumber, (state, action) => {
		state.value = action.payload
	})
})