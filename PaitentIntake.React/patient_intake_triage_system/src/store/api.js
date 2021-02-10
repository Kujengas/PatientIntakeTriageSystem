

//const sitePrefix = 'http://patientintake.shuthuluwhiskeyroses.com/';
const sitePrefix = 'https://localhost:44382/';


const apiPrefix = sitePrefix + 'api/';

export const getProviderList = async () => {

    const url = apiPrefix + 'Provider';
    return fetch(url).then(apiResponse => apiResponse.json());

}

export const getPatientList = async () => {

    const url = apiPrefix + 'Patient';
    return fetch(url).then(apiResponse => apiResponse.json());

}

export const getLocationList = async () => {

    const url = apiPrefix + 'Location';
    return fetch(url).then(apiResponse => apiResponse.json());

}

export const getLocationDashboardById = async (locationId) => {
    const url = apiPrefix + 'Location' + `/${locationId}`;
    let dashboard = await fetch(url).then(apiResponse => apiResponse.json());

    return dashboard;
}

export const getRoomList = async (locationId) => {

    const url = apiPrefix + 'Room/Location' + `/${locationId}`;
    return fetch(url).then(apiResponse => apiResponse.json());

}

export const getRoomById = async (roomId) => {

    const url = apiPrefix + 'Room' + `/${roomId}`;
    return fetch(url).then(apiResponse => apiResponse.json());

}


export const saveEncounter = async (encounter) => {

    const url = apiPrefix + 'Encounter';
    console.log(encounter);
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(encounter),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
    return response;
}


export const saveEncounterAttributes = async (attributeData) => {

    //TODO: Move all api calls to a common store
    //reinvestigate redux as well as other alternatives
    const url = apiPrefix + 'Encounter/Attributes';

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(attributeData),
        headers: { 'Content-Type': 'application/json' }
    });


    console.log(attributeData);
    //handleClose();
    console.log(response);
}

export const getAttributeList = async () => {

    const url = apiPrefix + 'Encounter/AttributeFields/';
    return fetch(url).then(apiResponse => apiResponse.json());

}

export const getEncounterClinicalData = async (encounterId) => {

    const url = `${apiPrefix}Encounter/Attributes/${encounterId}`;
    return fetch(url).then(apiResponse => apiResponse.json());
}

export const savePatient = async (patient) => {

    const url = `${apiPrefix}Patient`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(patient),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);
    return response.json();

}

export const checkInPatientEncounter = async (encounterId) => {

    const url = `${apiPrefix}Encounter/Checkin`;

    console.log("encounterId:" + encounterId);

    const response = await fetch(url, {
        method: 'POST',
        body: encounterId,
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);
    return response.json();
}

export const checkOutPatientEncounter = async (encounterId) => {

    const url = `${apiPrefix}Encounter/Checkout`;

    const response = await fetch(url, {
        method: 'POST',
        body: encounterId,
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);
    return response.json();
}

export const cancelPatientEncounter = async (encounterId) => {

    const url = `${apiPrefix}Encounter/Cancel`;

    const response = await fetch(url, {
        method: 'POST',
        body: encounterId,
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);
    return response.json();
}

export const assignEncounterToRoom = async (assignment) => {

    const url = `${apiPrefix}Encounter/Assign`;

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(assignment),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);
    return response.json();

}

export const authenticate = async (userInfo) => {

    const url = `${sitePrefix}Token`;

    const data = {
        "Username": userInfo.UserName,
        "Password": userInfo.Password,
        "GrantType": "password"
    };

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    /*
      user = response.userName;
            // Cache the access token in session storage.
            window.localStorage.setItem(tokenKey, response.access_token);
     */
    console.log(response);
}