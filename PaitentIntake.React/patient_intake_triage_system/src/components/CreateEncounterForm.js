import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PatientSearch from './PatientSearch';
import ProviderSearch from './ProviderSearch';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));




function CreateEncounterForm() {

    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(() => {

    }, []);

    const saveEncounter = async () => {

        const encounter = {};
        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'https://localhost:44382/api/Encounter';

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(encounter),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response);
    }

    const handleChange = (event, newValue) => {
     
        console.log("changed!!")
        console.log(newValue||null);
    };
        
 
    //const classes = useStyles();

    return (
        <Grid item xs={12} >
            <Paper className={classes.paper}>
                
       

                <PatientSearch onChange={handleChange} />
                <br />
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue={Date.now}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br/>
                <ProviderSearch onChange={handleChange} />

                <Button variant="contained" color="primary" onClick={() => saveEncounter() }>
                   Save Encounter
    </Button>
       </Paper></Grid>
    );
}

export default CreateEncounterForm;