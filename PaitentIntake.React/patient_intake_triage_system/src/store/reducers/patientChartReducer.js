import {  PATIENT_CHART_REQUEST, PATIENT_CHART_RESPONSE } from "../actions"

const initialState = {
    isPatientChartLoading: true,
    chart: {
        Demographics: {},
        Encounters:[]
    }
}

const patientChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case PATIENT_CHART_REQUEST:
            
            return { ...state, patientId: action.payload.patientId}
        case PATIENT_CHART_RESPONSE:
            console.log(action.payload.chart);
            return { ...state, isPatientChartLoading: action.payload.isPatientChartLoading, chart: action.payload.chart }
        default:
            return state;
    }
}

export default patientChartReducer;

