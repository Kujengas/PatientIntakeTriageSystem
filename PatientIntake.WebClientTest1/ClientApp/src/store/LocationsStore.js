const requestLocationListType = 'REQUEST_LOCATION_LIST';
const receiveLocationListType = 'RECEIVE_LOCATION_LIST';

const requestLocationDashBoardType = 'REQUEST_LOCATION_DASHBOARD';
const receiveLocationDashBoardType = 'RECEIVE_LOCATION_DASHBOARD';
const initialState = {
    locationList: [], locationDashBoard: {
        OpenEncounters: [],
        Providers: [],
        RoomOccupancy: []
    }, isLoading: false, hasLoaded: false, hasDashBoardLoaded: false, locationId: null
};

export const actionCreators = {
    requestLocationList: () => async (dispatch, getState) => {
        if (getState.hasLoaded) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestLocationListType });

        const url = 'https://localhost:44382/api/location/';
        const response = await fetch(url);
        const locationList = await response.json();
        getState.hasLoaded = true;
        dispatch({ type: receiveLocationListType, locationList });
    },

    requestLocationDashboard: (locationId) => async (dispatch, getState) => {
        
        if (getState.hasDashBoardLoaded) {
            // Don't issue a duplicate request (we already have or are loading the requested data)
            return;
        }

        dispatch({ type: requestLocationDashBoardType, locationId });
        

        const url = 'https://localhost:44382/api/location/' + getState.locationId;
        const response = await fetch(url);
        const locationDashBoard = await response.json();
        
        dispatch({ type: receiveLocationDashBoardType, locationDashBoard });
        getState.hasDashBoardLoaded = true;
        
    }

};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestLocationListType) {
        return {
            ...state,
            isLoading: true,
            hasLoaded: false
        };
    }

    if (action.type === receiveLocationListType) {
        return {
            ...state,
            startDateIndex: action.startDateIndex,
            locationList: action.locationList,
            hasLoaded: true,
            isLoading: false
        };
    }


    if (action.type === requestLocationDashBoardType) {
        return {
            ...state,
            locationId: action.locationId,
            locationDashBoard: action.locationDashBoard,
            hasDashBoardLoaded: false,
            isLoading: true
        };
    }

    if(action.type === receiveLocationDashBoardType) {
        return {
            ...state,
            locationId: action.locationId,
            locationList: action.locationList,
            locationDashBoard: action.locationDashBoard,
            hasDashBoardLoaded: true,
            isLoading: false
        };
    }

    return state;
};
