import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import createSagaMiddleware from "redux-saga"
import saga from "../saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		skills: searchReducer
	},
	middleware: [sagaMiddleware], 
})

sagaMiddleware.run(saga)
export default store