import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./numberReducer";

const store = configureStore({
	reducer: {
		number: numberReducer
	}
})

export default store