import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { patientListRequestAction } from '../store/actions';


export default function PatientSearch({ value, onChange, id, data = [], isRequired = '' }) {

    //const [patients, setPatients] = useState(data);
    //const [loading, setLoading] = useState(true);
    const [currentPatient, setCurentPatient] = useState({});

    const handleChange = (event, newValue) => {
        setCurentPatient(newValue);
        if (typeof onChange !== "undefined") {
            onChange(id, newValue);
        }
    };

    const patientListState = useSelector(state => state.patientList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (patientListState.patients.length == 0) {
            dispatch(patientListRequestAction());
        } //else { setLoading(false);}
    }, []);


    return (<div >

        <Autocomplete
            id={id}
            disableListWrap
            options={patientListState.patients}
            getOptionLabel={(option) => option.FirstName + " " + option.MiddleName + " " + option.LastName}
            onChange={(event, newValue) => { handleChange(event, newValue) }}
            renderInput={(params) => <TextField {...params} variant="outlined" InputLabelProps={{ shrink: true }} label="Patient Search" />}
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
