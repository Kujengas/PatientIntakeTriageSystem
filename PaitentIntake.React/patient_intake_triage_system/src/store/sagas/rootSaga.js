import { fork } from 'redux-saga/effects';
import { providerListRequestWatcher } from './providerListSaga';
import { patientListRequestWatcher } from './patientListSaga';
import { locationListRequestWatcher } from './locationListSaga';
import { locationDashboardRequestWatcher } from './locationDashboardSaga';
import { roomListRequestWatcher } from './roomListSaga';
import { saveEncounterRequestWatcher } from './saveEncounterSaga';
import { createPatientRequestWatcher } from './createPatientSaga';
import { getEncounterClinicalDataRequestWatcher } from './getEncounterClinicalDataSaga';
import { saveEncounterClinicalDataRequestWatcher } from './saveEncounterClinicalDataSaga';
import { attributeListRequestWatcher } from './attributeListSaga';

export function* rootSaga() {
    yield fork(providerListRequestWatcher)
    yield fork(patientListRequestWatcher)
    yield fork(locationListRequestWatcher)
    yield fork(locationDashboardRequestWatcher)
    yield fork(roomListRequestWatcher)
    yield fork(saveEncounterRequestWatcher)
    yield fork(createPatientRequestWatcher)
    yield fork(getEncounterClinicalDataRequestWatcher)
    yield fork(saveEncounterClinicalDataRequestWatcher)
    yield fork(attributeListRequestWatcher)

}