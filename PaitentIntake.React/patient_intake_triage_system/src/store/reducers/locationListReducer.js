import {  LOCATION_LIST_REQUEST, LOCATION_LIST_RESPONSE } from "../actions"

const initialState = {
    isLocationListLoading: true,
    locations:[]
}

const locationListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_LIST_REQUEST:
            return { ...state }
        case LOCATION_LIST_RESPONSE:
            console.log(action.payload)
            return { ...state, isLocationListLoading: action.payload.isLocationListLoading, locations: action.payload.locations }
        default:
            return state;
    }
}

export default locationListReducer;

