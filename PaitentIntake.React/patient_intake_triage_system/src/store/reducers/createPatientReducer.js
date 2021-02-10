import {  CREATE_PATIENT_REQUEST, CREATE_PATIENT_RESPONSE } from "../actions"

const initialState = {
    isPatientSaving: false,
    pendingPatient: null,
    response: null
}

const createPatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PATIENT_REQUEST:
            
            return { ...state, isPatientSaving: true, pendingPatient: action.payload.pendingPatient}
        case CREATE_PATIENT_RESPONSE:
            console.log(action.payload.response);
            return { ...state, isPatientSaving: action.payload.isPatientSaving, pendingPatient: null, response: action.payload.response}
        default:
            return state;
    }
}

export default createPatientReducer;

