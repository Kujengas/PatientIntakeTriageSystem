import {  SAVE_ENCOUNTER_REQUEST, SAVE_ENCOUNTER_RESPONSE } from "../actions"

const initialState = {
    isEncounterSaving: false,
    pendingEncounter: null,
    response: null
}

const saveEncounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ENCOUNTER_REQUEST:
            
            return { ...state, isEncounterSaving: true, pendingEncounter: action.payload.pendingEncounter}
        case SAVE_ENCOUNTER_RESPONSE:
            console.log(action.payload.response);
            return { ...state, isEncounterSaving: action.payload.isEncounterSaving, pendingEncounter: null, response: action.payload.response}
        default:
            return state;
    }
}

export default saveEncounterReducer;

