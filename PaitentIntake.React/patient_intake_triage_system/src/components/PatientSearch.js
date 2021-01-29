import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';


export default function PatientSearch({ value, onChange, id, data = [], isRequired='' }) {

    const [patients, setPatients] = useState(data);
    const [currentPatient, setCurentPatient] = useState({});
    const [loading, setLoading] = useState(true);



    const handleChange = (event, newValue) => {
        setCurentPatient(newValue);
        if (typeof onChange !== "undefined") {
            onChange(id, newValue);
        }
    };

    const fetchPatientList = async () => {

        const url = 'https://localhost:44382/api/Patient';

        const response = await fetch(url);
        const patientList = await response.json();

        //console.log(response);
        //console.log(patientList);

        setPatients(patientList);
        setLoading(false);
    }


    useEffect(() => {
        if (patients.length == 0) {
            fetchPatientList();
        } else { setLoading(false);}
    }, []);


    return (<div >

        <Autocomplete
            id={id}
            disableListWrap
            options={patients}
            getOptionLabel={(option) => option.FirstName + " " + option.MiddleName + " " + option.LastName}
            onChange={(event, newValue) => { handleChange(event, newValue) }}
            renderInput={(params) => <TextField {...params} variant="outlined" InputLabelProps={{ shrink: true }}  label="Patient Search" />}
            renderOption={(option) => <Typography noWrap><div>
                <div>
                    {option.FirstName + " " + option.MiddleName + " " + option.LastName}
                </div>
                <div>
                    {option.Phone}
                </div>

            </div></Typography>}
        />

    </div>
    );
}
