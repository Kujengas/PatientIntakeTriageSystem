import { takeEvery, call, put } from "redux-saga/effects";
import { CREATE_PATIENT_REQUEST, createPatientResponseAction } from '../actions';
import { savePatient } from '../api';

export function* createPatientRequestWatcher()
{
    yield takeEvery(CREATE_PATIENT_REQUEST, createPatientRequestFlow);
}

function* createPatientRequestFlow(action) {
   
    const response = yield call(savePatient, action.payload.pendingPatient);
    yield put(createPatientResponseAction(response));
}