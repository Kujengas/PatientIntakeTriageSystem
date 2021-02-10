import {  PATIENT_LIST_REQUEST, PATIENT_LIST_RESPONSE } from "../actions"

const initialState = {
    isPatientListLoading: true,
    patients:[]
}

const patientListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PATIENT_LIST_REQUEST:
            return { ...state }
        case PATIENT_LIST_RESPONSE:
            console.log(action.payload)
            return { ...state, isPatientListLoading: action.payload.isPatientListLoading, patients: action.payload.patients }
        default:
            return state;
    }
}

export default patientListReducer;


