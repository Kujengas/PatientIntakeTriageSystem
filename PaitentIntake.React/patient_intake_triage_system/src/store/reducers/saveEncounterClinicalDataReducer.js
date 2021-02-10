import {  SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST, SAVE_ENCOUNTER_CLINICAL_DATA_RESPONSE } from "../actions"

const initialState = {
    isClinicalDataSaving: false,
    clinicalData: null,
    response: null
}

const saveEncounterClinicalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST:
            return { ...state, isClinicalDataSaving: true, clinicalData: action.payload.clinicalData}
        case SAVE_ENCOUNTER_CLINICAL_DATA_RESPONSE:
            console.log(action.payload.response);
            return { ...state, isClinicalDataSaving: action.payload.isClinicalDataSaving, clinicalData: action.payload.clinicalData}
        default:
            return state;
    }
}

export default saveEncounterClinicalDataReducer;

