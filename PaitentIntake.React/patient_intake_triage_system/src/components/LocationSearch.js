import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';


export default function LocationSearch({ value, onChange, id, data = [], isRequired='' }) {

    const [locations, setLocations] = useState(data);
    const [currentLocation, setCurrentLocation] = useState({});
    const [loading, setLoading] = useState(true);



    const handleChange = (event, newValue) => {
        setCurrentLocation(newValue);
        if (typeof onChange !== "undefined") {
            onChange(id, newValue);
        }
    };

    const fetchLocationList = async () => {

        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'http://patientintake.shuthuluwhiskeyroses.com/api/Location';

        const response = await fetch(url);
        const locationList = await response.json();

        //console.log(response);
        //console.log(locationList);

        setLocations(locationList);
        setLoading(false);
    }


    useEffect(() => {
        if (locations.length == 0) {
            fetchLocationList();
        } else { setLoading(false);}
    }, []);


    return (<div >

        <Autocomplete
            id={id}
            disableListWrap
            options={locations}
            getOptionLabel={(option) => option.LocationDescription }
            onChange={(event, newValue) => { handleChange(event, newValue) }}
            renderInput={(params) => <TextField {...params} variant="outlined" InputLabelProps={{ shrink: true }}  label="Facility Search" />}
            renderOption={(option) => <Typography noWrap><div>
                <div>
                    {option.LocationDescription}
                </div>
                <div>
                    {option.AddressLine1}
                </div>
                <div>
                    {option.Phone}
                </div>

            </div></Typography>}
        />

    </div>
    );
}
