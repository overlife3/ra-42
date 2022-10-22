import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import listReducer from "./listReducer";
import saga from "../saga";
import itemReducer from "./itemReducer";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		list: listReducer,
		item: itemReducer
	},
	middleware: [sagaMiddleware], 
})

sagaMiddleware.run(saga)

export default store