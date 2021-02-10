import {  LOCATION_DASHBOARD_REQUEST, LOCATION_DASHBOARD_RESPONSE } from "../actions"

const initialState = {
    isLocationDashboardLoading: true,
    dashboard: {}
}

const locationDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCATION_DASHBOARD_REQUEST:
            
            return { ...state, locationId: action.payload.locationId}
        case LOCATION_DASHBOARD_RESPONSE:
            console.log(action.payload.dashboard);
            return { ...state, isLocationDashboardLoading: action.payload.isLocationDashboardLoading, dashboard: action.payload.dashboard }
        default:
            return state;
    }
}

export default locationDashboardReducer;

