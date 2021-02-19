import { takeEvery, call, put } from "redux-saga/effects";
import { CREATE_PATIENT_REQUEST, createPatientResponseAction, patientListResponseAction } from '../actions';
import { savePatient, getPatientList } from '../api';

export function* createPatientRequestWatcher()
{
    yield takeEvery(CREATE_PATIENT_REQUEST, createPatientRequestFlow);
}

function* createPatientRequestFlow(action) {
   
    const response = yield call(savePatient, action.payload.pendingPatient);
    yield put(createPatientResponseAction(response));

   // const patientList = yield call(getPatientList);
    //yield put(patientListResponseAction(patientList));
}