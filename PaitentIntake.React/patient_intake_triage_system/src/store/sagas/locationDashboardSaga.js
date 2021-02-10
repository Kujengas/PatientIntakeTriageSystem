import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import { LOCATION_DASHBOARD_REQUEST, locationDashboardResponseAction } from '../actions';
import { getLocationDashboardById } from '../api';

export function* locationDashboardRequestWatcher()
{
    yield takeEvery(LOCATION_DASHBOARD_REQUEST, locationDashboardRequestFlow);
}

function* locationDashboardRequestFlow(action) {
    const locationDashboard = yield call(getLocationDashboardById, action.payload.locationId);
    yield put(locationDashboardResponseAction(locationDashboard));
}