import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { providerListRequestAction } from '../store/actions';


export default function PatientSearch({ value, onChange , id, data  = [] }) {

   // const [loading, setLoading] = useState(true);
   // const [providers, setProviders] = useState(data);
    const [currentProvider, setCurrentProvider] = useState({});
  

    const handleChange = (event, newValue) => {
        setCurrentProvider(newValue);
        if (typeof onChange !== "undefined") {
            onChange(id, newValue);
        }
    };

    const providerListState = useSelector(state => state.providerList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (providerListState.providers.length == 0) {
            dispatch(providerListRequestAction());
        } //else { setLoading(false);}
    }, []);

    return (<div >

        <Autocomplete
            id={id}
            disableListWrap
            options={providerListState.providers}
            getOptionLabel={(option) => option.Prefix + " " + option.FirstName + " "+ option.LastName + " " + option.Suffix}
            onChange={(event, newValue) => { handleChange(event, newValue) }}


            renderInput={(params) => <TextField {...params} variant="outlined" InputLabelProps={{ shrink: true }}  label="Provider Search" />}
            renderOption={(option) => <Typography noWrap><div>
                <div>
                    {option.Prefix + " " + option.FirstName + " " + option.LastName + " " + option.Suffix}
                </div>
                <div>
                  
                    {option.Phone}
                </div>

            </div></Typography>}
        />

    </div>
    );
}