import { take, put, spawn, debounce, fork, call, takeEvery, takeLatest, retry } from "redux-saga/effects"
import { actions } from "../redux/searchReducer"
import { searchSkills } from "../api";

function filterChangeSearchAction({type, payload}) {
	return type === actions.changeSearchField.type && payload.trim() !== ''; 
}
// worker
function* handleChangeSearchSaga(action) {
	yield put(actions.searchSkillsRequest(action.payload))
}

// watch
function* watchChangeSearchSaga() {
	yield debounce(100, filterChangeSearchAction, handleChangeSearchSaga)
}



function* handleSearchSkillsSaga(action) {
	try {
		const retryCount = 3
		const retryDelay = 1000

		const data = yield retry(retryCount, retryDelay, searchSkills, action.payload)
		yield put(actions.searchSkillsSuccess(data))
	} catch (err) {
		yield put(actions.searchSkillsFailure(err.message))
	}
}

function* watchSearchSkillsSaga() {
	// while (true) {
	// 	const action = yield take(actions.searchSkillsRequest.type)
	// 	yield fork(handleSearchSkillsSaga, action)
	// }
	// заменяется

	//yield takeEvery(actions.searchSkillsRequest.type, handleSearchSkillsSaga)
	// но нам необходим 

	yield takeLatest(actions.searchSkillsRequest.type, handleSearchSkillsSaga)
}

export default function* saga() {
	yield spawn(watchChangeSearchSaga)
	yield spawn(watchSearchSkillsSaga)
}