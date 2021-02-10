import { takeEvery, call, put } from "redux-saga/effects";
import { GET_ENCOUNTER_CLINICAL_DATA_REQUEST, getEncounterClinicalDataResponseAction } from '../actions';
import { getEncounterClinicalData } from '../api';

export function* getEncounterClinicalDataRequestWatcher() {
    yield takeEvery(GET_ENCOUNTER_CLINICAL_DATA_REQUEST, getEncounterClinicalDataRequestFlow);
}

function* getEncounterClinicalDataRequestFlow(action) {
    const response = yield call(getEncounterClinicalData, action.payload.encounterId);
    yield put(getEncounterClinicalDataResponseAction(response));
}


