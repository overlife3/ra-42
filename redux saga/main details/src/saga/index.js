import { put, retry, spawn, take, takeEvery, takeLatest } from "redux-saga/effects"
import { actions } from "../redux/listReducer"
import { getItemsItem, getItemsList } from "../api"
import { actionsItem } from "../redux/itemReducer"

function* handleDetailsItemSuccessSaga(action) {
	try {
		const retryCount = 3
		const retryDelay = 300
		const data = yield retry(retryCount, retryDelay, getItemsItem, action.payload)
		yield put(actionsItem.detailsSuccess(data))
	} catch (err) {
		yield put(actionsItem.detailsFailure(err.message))
	}
}

function* handleDetailsListSuccessSaga() {
	try {
		const retryCount = 3
		const retryDelay = 300
		const data = yield retry(retryCount, retryDelay, getItemsList)
		yield put(actions.detailsSuccess(data))
	} catch (err) {
		yield put(actions.detailsFailure(err.message))
	}
}

function* watchDetailsListSuccess() {
	yield takeEvery(actions.detailsRequest.type, handleDetailsListSuccessSaga)
}

function* watchDetailsItemSuccess() {
	yield takeEvery(actionsItem.detailsRequest.type, handleDetailsItemSuccessSaga)
}

export default function* saga() {
	yield spawn(watchDetailsItemSuccess)
	yield spawn(watchDetailsListSuccess)
}