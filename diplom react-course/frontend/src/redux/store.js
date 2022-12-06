import { configureStore } from "@reduxjs/toolkit";
import categorieReducer from "./categorieReducer";
import createSagaMiddleware from "@redux-saga/core";
import saga from "../saga/index";
import catalogReducer from "./catalogReducer";
import cartReducer from "./cartReducer";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer:{
		categorie: categorieReducer,
		catalog: catalogReducer,
		cart: cartReducer
	},
	middleware: [sagaMiddleware]
})

sagaMiddleware.run(saga)

export default store
