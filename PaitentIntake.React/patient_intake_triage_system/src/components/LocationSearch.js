import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { locationListRequestAction } from '../store/actions';


export default function LocationSearch({ value, onChange, id, data = [], isRequired='' }) {

    //const [locations, setLocations] = useState(data);
    const [currentLocation, setCurrentLocation] = useState({});
   // const [loading, setLoading] = useState(true);



    const handleChange = (event, newValue) => {
        setCurrentLocation(newValue);
        if (typeof onChange !== "undefined") {
            onChange(id, newValue);
        }
    };

    const locationListState = useSelector(state => state.locationList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (locationListState.locations.length == 0) {
            dispatch(locationListRequestAction());
        } //else { setLoading(false);}
    }, []);


    return (<div >

        <Autocomplete
            id={id}
            disableListWrap
            options={locationListState.locations}
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
