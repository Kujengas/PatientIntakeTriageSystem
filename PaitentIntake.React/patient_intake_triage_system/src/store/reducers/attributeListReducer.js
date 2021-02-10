import { GET_ATTRIBUTE_LIST_REQUEST, GET_ATTRIBUTE_LIST_RESPONSE } from "../actions"

const initialState = {
    isAttributeListLoading: true,
    attributes:[]
}

const attributeListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRIBUTE_LIST_REQUEST:
            return { ...state }
        case GET_ATTRIBUTE_LIST_RESPONSE:
            console.log(action.payload)
            return { ...state, isAttributeListLoading: action.payload.isAttributeListLoading, attributes: action.payload.attributes }
        default:
            return state;
    }
}

export default attributeListReducer;


