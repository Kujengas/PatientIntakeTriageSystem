import { takeLatest, call, put } from "redux-saga/effects";
import { PATIENT_LIST_REQUEST,patientListResponseAction } from '../actions';
import { getPatientList } from '../api';

export function* patientListRequestWatcher()
{
    yield takeLatest(PATIENT_LIST_REQUEST, patientListRequestFlow);
}

function* patientListRequestFlow() {
    const patientList = yield call(getPatientList);
    yield put(patientListResponseAction(patientList));

}