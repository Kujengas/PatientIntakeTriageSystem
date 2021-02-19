import { combineReducers } from 'redux';
import providerListReducer from './providerListReducer';
import patientListReducer from './patientListReducer';
import locationListReducer from './locationListReducer';
import locationDashboardReducer from './locationDashboardReducer';
import saveEncounterReducer from './saveEncounterReducer';
import createPatientReducer from './createPatientReducer';
import getEncounterClinicalDataReducer from './getEncounterClinicalDataReducer';
import saveEncounterClinicalDataReducer from './saveEncounterClinicalDataReducer';
import attributeListReducer from './attributeListReducer';
import patientChartReducer from './patientChartReducer';

const apiReducer = combineReducers({
    providerList: providerListReducer,
    patientList: patientListReducer,
    locationList: locationListReducer,
    locationDashboard: locationDashboardReducer,
    savedEncounter: saveEncounterReducer,
    createdPatient: createPatientReducer,
    loadedEncounterClinicalData: getEncounterClinicalDataReducer,
    savedEncounterClinicalData: saveEncounterClinicalDataReducer,
    attributeList: attributeListReducer,
    patientChart: patientChartReducer
});

export default apiReducer;