import { combineReducers, compose, legacy_createStore } from "redux";
import { formReducer } from "./formReducer";
import { itemReducer } from "./itemReducer";
import mainReducer from "./mainReducer";
import { filterReducer } from "./filterReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function configureStore() {
	return legacy_createStore(
		combineReducers({
			item: mainReducer,
			form: formReducer, 
			editItem: itemReducer,
			filter: filterReducer
		}
		),
		undefined,
		compose(
			ReactReduxDevTools
		)
	)
}

