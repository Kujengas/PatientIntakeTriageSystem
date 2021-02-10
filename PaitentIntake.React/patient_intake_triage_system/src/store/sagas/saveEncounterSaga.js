import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_ENCOUNTER_REQUEST, saveEncounterResponseAction } from '../actions';
import { saveEncounter } from '../api';

export function* saveEncounterRequestWatcher()
{
    yield takeEvery(SAVE_ENCOUNTER_REQUEST, saveEncounterRequestFlow);
}

function* saveEncounterRequestFlow(action) {
    const response = yield call(saveEncounter, action.payload.pendingEncounter);
    yield put(saveEncounterResponseAction(response));
}