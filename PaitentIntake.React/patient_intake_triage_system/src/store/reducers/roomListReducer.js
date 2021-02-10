import {  ROOM_LIST_REQUEST, ROOM_LIST_RESPONSE } from "../actions"

const initialState = {
    isRoomListLoading: true,
    rooms: [],
    locationId: null 
}

const roomListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOM_LIST_REQUEST:
            return { ...state, locationId: action.payload.locationId }
        case ROOM_LIST_RESPONSE:
            console.log(action.payload)
            return { ...state, isRoomListLoading: action.payload.isRoomListLoading, rooms: action.payload.rooms }
        default:
            return state;
    }
}

export default roomListReducer;


