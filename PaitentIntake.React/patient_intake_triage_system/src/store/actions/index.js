export const PROVIDER_LIST_REQUEST = "PROVIDER_LIST_REQUEST";
export const PROVIDER_LIST_RESPONSE = "PROVIDER_LIST_RESPONSE";
export const PATIENT_LIST_REQUEST = "PATIENT_LIST_REQUEST";
export const PATIENT_LIST_RESPONSE = "PATIENT_LIST_RESPONSE";
export const LOCATION_LIST_REQUEST = "LOCATION_LIST_REQUEST";
export const LOCATION_LIST_RESPONSE = "LOCATION_LIST_RESPONSE";
export const LOCATION_DASHBOARD_REQUEST = "LOCATION_DASHBOARD_REQUEST";
export const LOCATION_DASHBOARD_RESPONSE = "LOCATION_DASHBOARD_RESPONSE";
export const ROOM_LIST_REQUEST = "ROOM_LIST_REQUEST";
export const ROOM_LIST_RESPONSE = "ROOM_LIST_RESPONSE";
export const SAVE_ENCOUNTER_REQUEST = "SAVE_ENCOUNTER_REQUEST";
export const SAVE_ENCOUNTER_RESPONSE = "SAVE_ENCOUNTER_RESPONSE";
export const CREATE_PATIENT_REQUEST = "CREATE_PATIENT_REQUEST";
export const CREATE_PATIENT_RESPONSE = "CREATE_PATIENT_RESPONSE";
export const GET_ENCOUNTER_CLINICAL_DATA_REQUEST = "GET_ENCOUNTER_CLINICAL_DATA_REQUEST";
export const GET_ENCOUNTER_CLINICAL_DATA_RESPONSE = "GET_ENCOUNTER_CLINICAL_DATA_RESPONSE";
export const SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST = "SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST";
export const SAVE_ENCOUNTER_CLINICAL_DATA_RESPONSE = "SAVE_ENCOUNTER_CLINICAL_DATA_RESPONSE";
export const GET_ATTRIBUTE_LIST_REQUEST =  "GET_ATTRIBUTE_LIST_REQUEST";
export const GET_ATTRIBUTE_LIST_RESPONSE = "GET_ATTRIBUTE_LIST_RESPONSE";
export const PATIENT_CHART_REQUEST = "PATIENT_CHART_REQUEST";
export const PATIENT_CHART_RESPONSE = "PATIENT_CHART_RESPONSE";

//ACTIONS

export const providerListRequestAction = () => ({
    type: PROVIDER_LIST_REQUEST, payload: {
        isProviderListLoading: true
    }
});

export const providerListResponseAction = (providerList) => ({
        type: PROVIDER_LIST_RESPONSE,
    payload: {
        isProviderListLoading: false,
        providers: providerList
    }
});


export const patientListRequestAction = () => ({
    type: PATIENT_LIST_REQUEST, payload: {
        isProviderListLoading: true
    }
});

export const patientListResponseAction = (patientList) => ({
    type: PATIENT_LIST_RESPONSE,
    payload: {
        isPatientListLoading: false,
        patients: patientList
    }
});

export const locationListRequestAction = () => ({
    type: LOCATION_LIST_REQUEST, payload: {
        isLocationListLoading: true
    }
});

export const locationListResponseAction = (locationList) => ({
    type: LOCATION_LIST_RESPONSE,
    payload: {
        isLocationListLoading: false,
        locations: locationList
    }
});

export const locationDashboardRequestAction = (locationId) => ({
    type: LOCATION_DASHBOARD_REQUEST, payload: {
        isLocationDashboardLoading: true,
        locationId: locationId
    }
});

export const locationDashboardResponseAction = (locationDashboard) => ({
    type: LOCATION_DASHBOARD_RESPONSE,
    payload: {
        isLocationDashboardLoading: false,
        dashboard: locationDashboard
    }
});


export const roomListRequestAction = (locationId) => ({
    type: ROOM_LIST_REQUEST, payload: {
        isRoomListLoading: true,
        locationId: locationId
    }
});

export const roomListResponseAction = (roomList) => ({
    type: ROOM_LIST_RESPONSE,
    payload: {
        isRoomListLoading: false,
        locations: roomList,
    }
});

export const saveEncounterRequestAction = (encounter) => ({
    type: SAVE_ENCOUNTER_REQUEST,
    payload: {
        isEncounterSaving: true,
        pendingEncounter: encounter
    }
});

export const saveEncounterResponseAction = (response) => ({
    type: SAVE_ENCOUNTER_RESPONSE,
    payload: {
        isEncounterSaving: false,
        pendingEncounter:null,
        response:response
    }
});


export const createPatientRequestAction = (patient) => ({
    type: CREATE_PATIENT_REQUEST,
    payload: {
        isPatientSaving: true,
        pendingPatient: patient
    }
});

export const createPatientResponseAction = (response) => ({
    type: CREATE_PATIENT_RESPONSE,
    payload: {
        isPatientSaving: false,
        pendingPatient: null,
        response: response
    }
});


export const getEncounterClinicalDataRequestAction = (encounterId) => ({
    type: GET_ENCOUNTER_CLINICAL_DATA_REQUEST,
    payload: {
        isClinicalDataLoading: true,
        encounterId: encounterId,
        clinicalData: null
    }
});

export const getEncounterClinicalDataResponseAction = (clinicalData) => ({
    type: GET_ENCOUNTER_CLINICAL_DATA_RESPONSE,
    payload: {
        isClinicalDataLoading: false,
        clinicalData: clinicalData
    }
});

export const saveEncounterClinicalDataRequestAction = (encounterClinicalData) => ({
    type: SAVE_ENCOUNTER_CLINICAL_DATA_REQUEST,
    payload: {
        isClinicalDataSaving: true,
        clinicalData: encounterClinicalData
    }
});

export const saveEncounterClinicalDataResponseAction = (response) => ({
    type: SAVE_ENCOUNTER_CLINICAL_DATA_RESPONSE,
    payload: {
        isClininalDataSaving: false,
        clinicalData: response
    }
});


export const attributeListRequestAction = () => ({
    type: GET_ATTRIBUTE_LIST_REQUEST, payload: {
        isAttributeListLoading: true
    }
});

export const attributeListResponseAction = (attributeList) => ({
    type: GET_ATTRIBUTE_LIST_RESPONSE,
    payload: {
        isAttributeListLoading: false,
        attributes: attributeList
    }
});

export const patientChartRequestAction = (patientId) => ({
    type: PATIENT_CHART_REQUEST, payload: {
        isPatientChartLoading: true,
        patientId: patientId
    }
});

export const patientChartResponseAction = (patientChart) => ({
    type: PATIENT_CHART_RESPONSE,
    payload: {
        isPatientChartLoading: false,
       chart: patientChart
    }
});
