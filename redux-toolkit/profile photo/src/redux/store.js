import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photos"


const store = configureStore({
	reducer: {
		photos: photosReducer
	}
}) 

export default store