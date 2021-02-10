import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST, saveEncounterClinicalDataResponseAction } from '../actions';
import { saveEncounterAttributes } from '../api';

export function* saveEncounterClinicalDataRequestWatcher()
{
    yield takeEvery(SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST, saveEncounterClinicalDataRequestFlow);
}

function* saveEncounterClinicalDataRequestFlow(action) {
    console.log('-------------------------------------------');
    console.log('Encounter Clinical Data Request:');
    console.log(action.payload.clinicalData);

    const response = yield call(saveEncounterAttributes, action.payload.clinicalData);
    console.log('-------------------------------------------');
    console.log('Encounter Clinical Data Response:');
    console.log(response);


    yield put(saveEncounterClinicalDataResponseAction(response));
}


