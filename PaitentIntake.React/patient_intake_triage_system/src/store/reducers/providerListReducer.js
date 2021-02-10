import {  PROVIDER_LIST_REQUEST, PROVIDER_LIST_RESPONSE } from "../actions"

const initialState = {
    isProviderListLoading: true,
    providers:[]
}

const providerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROVIDER_LIST_REQUEST:
            return { ...state }
        case PROVIDER_LIST_RESPONSE:
            console.log(action.payload)
            return { ...state, isProviderListLoading: action.payload.isProviderListLoading, providers: action.payload.providers }
        default:
            return state;
    }
}

export default providerListReducer;

