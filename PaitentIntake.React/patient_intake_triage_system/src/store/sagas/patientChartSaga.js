import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import { PATIENT_CHART_REQUEST, patientChartResponseAction } from '../actions';
import { getPatientChartById } from '../api';

export function* patientChartRequestWatcher()
{
    yield takeEvery(PATIENT_CHART_REQUEST, patietnChartRequestFlow);
}

function* patietnChartRequestFlow(action) {
    const patientChart = yield call(getPatientChartById, action.payload.patientId);
    yield put(patientChartResponseAction(patientChart));
}