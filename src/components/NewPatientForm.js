import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));









function NewPatientForm() {

    const [data, setData] = useState([]);
    const classes = useStyles();


    useEffect(() => {

    }, []);





    const save = async () => {
        var patient = {
            FirstName: '',
            LastName: '',
            MiddleName: '',
            Suffix: '',
            Prefix: '',
            DateOfBirth: '',
            Phone: '',
            Email: '',
            AddressLine1: '',
            AddressLine2: '',
            AddressCity: '',
            AddressState: '',
            AddressPostalCode: '',
            OfficePhone: '',
            Fax: '',
            PatientStatus: '',
            Gender: '',
            Marital_Status: '',
            ContactBy: '',
            Race: '',
            SSN: '',
            SpokenLanguage: '',
            RespProv: '',
            MRN: '',
            Referredby: '',
            EmpStatus: '',
            SensChart: '',
            HomeLocation: '',
            ExternalID: '',
        };

        patient.FirstName = document.getElementById('txtFirstName').value || "";
        patient.LastName = document.getElementById('txtLastName').value || "";
        patient.MiddleName = document.getElementById('txtMiddleName').value || "";
        patient.Suffix = document.getElementById('txtSuffix').value || "";
        patient.Prefix = document.getElementById('txtPrefix').value || "";
        patient.DateOfBirth = document.getElementById('txtDateOfBirth').value || "";
        patient.Phone = document.getElementById('txtPhone').value || "";
        patient.Email = document.getElementById('txtEmail').value || "";
        patient.AddressLine1 = document.getElementById('txtAddressLine1').value || "";
        patient.AddressLine2 = document.getElementById('txtAddressLine2').value || "";
        patient.AddressCity = document.getElementById('txtAddressCity').value || "";
        patient.AddressState = document.getElementById('txtAddressState').value || "";
        patient.AddressPostalCode = document.getElementById('txtAddressPostalCode').value || "";
        patient.OfficePhone = document.getElementById('txtOfficePhone').value || "";
        patient.Fax = document.getElementById('txtFax').value || "";
        patient.Gender = document.getElementById('txtGender').value || "";
        patient.Marital_Status = document.getElementById('txtMarital_Status').value || "";
        patient.ContactBy = document.getElementById('txtContactBy').value || "";
        patient.Race = document.getElementById('txtRace').value || "";
        patient.SSN = document.getElementById('txtSSN').value || "";
        patient.SpokenLanguage = document.getElementById('txtSpokenLanguage').value || "";
        patient.RespProv = document.getElementById('txtRespProv').value || "";
        patient.Referredby = document.getElementById('txtReferredby').value || "";
        patient.EmpStatus = document.getElementById('txtEmpStatus').value || "";
        patient.SensChart = document.getElementById('txtSensChart').value || "";


        const url = 'https://localhost:44382/api/Patient';


        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response);

    }




    //const classes = useStyles();

    return (
        <Grid item xs={12} >
            <Paper className={classes.paper}>
                <h1>Patient Registration</h1>

                <div>
                    <div >
                        <TextField label="First Name" id="txtFirstName" InputLabelProps={{ shrink: true }} />
                        <TextField label="Last Name" id="txtLastName" InputLabelProps={{ shrink: true }} />
                        <TextField label="Middle Name" id="txtMiddleName" InputLabelProps={{ shrink: true }} />
                        <TextField label="Suffix" id="txtSuffix" InputLabelProps={{ shrink: true }} />
                        <TextField label="Prefix" id="txtPrefix" InputLabelProps={{ shrink: true }} />
                        <TextField label="Date Of Birth" id="txtDateOfBirth" InputLabelProps={{ shrink: true }} type="date" />
                        <TextField label="Gender" id="txtGender" InputLabelProps={{ shrink: true }} />
                        <TextField label="Race" id="txtRace" InputLabelProps={{ shrink: true }} />
                        <TextField label="SSN" id="txtSSN" InputLabelProps={{ shrink: true }} />
                        <TextField label="Spoken Language" id="txtSpokenLanguage" InputLabelProps={{ shrink: true }} />
                    </div>
                    <hr />
                    <div>
                        <TextField label="Address Line1" id="txtAddressLine1" InputLabelProps={{ shrink: true }} />
                        <TextField label="Address Line2" id="txtAddressLine2" InputLabelProps={{ shrink: true }} />
                        <TextField label="Address City" id="txtAddressCity" InputLabelProps={{ shrink: true }} />
                        <TextField label="Address State" id="txtAddressState" InputLabelProps={{ shrink: true }} />
                        <TextField label="Address PostalCode" id="txtAddressPostalCode" InputLabelProps={{ shrink: true }} />
                    </div>
                    <hr />
                    <div>
                                  <TextField label="Phone" id="txtPhone" InputLabelProps={{ shrink: true }} />
                        <TextField label="Office Phone" id="txtOfficePhone" InputLabelProps={{ shrink: true }} />
                        <TextField label="Fax" id="txtFax" InputLabelProps={{ shrink: true }} />
                        <TextField label="Email" id="txtEmail" InputLabelProps={{ shrink: true }} />
                       
             

                    </div>
                    <hr />
                    <div>
                        <TextField label="Resp Prov" id="txtRespProv" InputLabelProps={{ shrink: true }} />
                        <TextField label="Referred by" id="txtReferredby" InputLabelProps={{ shrink: true }} />
                        <TextField label="Emp Status" id="txtEmpStatus" InputLabelProps={{ shrink: true }} />
                        <TextField label="Sens Chart" id="txtSensChart" InputLabelProps={{ shrink: true }} />

                    </div>

                    <Button variant="contained" color="primary" onClick={() => save()}>
                        Save Patient
    </Button></div>
            </Paper></Grid>
    );
}

export default NewPatientForm;