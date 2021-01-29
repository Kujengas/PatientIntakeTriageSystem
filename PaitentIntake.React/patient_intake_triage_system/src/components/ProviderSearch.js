import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';


export default function PatientSearch({ value, onChange , id, data  = [] }) {

    const [providers, setProviders] = useState(data);
    const [currentProvider, setCurrentProvider] = useState({});
    const [loading, setLoading] = useState(true);



    const handleChange = (event, newValue) => {
        setCurrentProvider(newValue);
        if (typeof onChange !== "undefined") {
            onChange(id, newValue);
        }
    };

    const fetchProviderList = async () => {

        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'https://localhost:44382/api/Provider';

        const response = await fetch(url);
        const providerList = await response.json();

        //console.log(response);
        //console.log(providerList);

        setProviders(providerList);
        setLoading(false);
    }


    useEffect(() => {
        if (providers.length == 0) {
            fetchProviderList();
        } else { setLoading(false);}
    }, []);


    return (<div >

        <Autocomplete
            id={id}
            disableListWrap
            options={providers}
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