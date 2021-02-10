import {  GET_ENCOUNTER_CLINICAL_DATA_REQUEST, GET_ENCOUNTER_CLINICAL_DATA_RESPONSE } from "../actions"

const initialState = {
    isClinicalDataLoading: false,
    clinicalData: [],
    encounterId:null
  
}

const getEncounterClinicalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ENCOUNTER_CLINICAL_DATA_REQUEST:
            return { ...state, isClinicalDataLoading: true, encounterId: action.payload.encounterId}
        case GET_ENCOUNTER_CLINICAL_DATA_RESPONSE:
            console.log(action.payload.response);
            return { ...state, isClinicalDataLoading: action.payload.isClinicalDataLoading, clinicalData:action.payload.clinicalData}
        default:
            return state;
    }
}

export default getEncounterClinicalDataReducer;

