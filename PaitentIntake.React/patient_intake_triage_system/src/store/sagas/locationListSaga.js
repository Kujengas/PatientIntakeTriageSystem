import { takeLatest, call, put } from "redux-saga/effects";
import { LOCATION_LIST_REQUEST,locationListResponseAction } from '../actions';
import { getLocationList } from '../api';

export function* locationListRequestWatcher()
{
    yield takeLatest(LOCATION_LIST_REQUEST, locationListRequestFlow);
}

function* locationListRequestFlow() {
    const locationList = yield call(getLocationList);
    yield put(locationListResponseAction(locationList));

}