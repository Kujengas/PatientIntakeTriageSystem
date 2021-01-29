import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});



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
}


function PatientContactList() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();


    useEffect(() => {
        fetchPatientList();
    }, []);


    const fetchPatientList = async () => {
        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'https://localhost:44382/api/Patient';

        const response = await fetch(url);

        const patientList = await response.json();

        console.log(response);
        console.log(patientList);

        setData(patientList);
        setLoading(false);

    }

    //const classes = useStyles();

    return (<div>

        { loading ? <CircularProgress /> :



            <Paper className={classes.root}>
                <h1>Patient List</h1>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                        <TableRow><TableCell>Name</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Work Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>AddressLine1</TableCell>
                            <TableCell>AddressLine2</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Postal Code</TableCell>
                           
                        </TableRow>
                        </TableHead>

                        <TableBody>
                        {data.map(patient =>
                            <TableRow>
                                <TableCell>{patient.FirstName} {patient.LastName}</TableCell>
                                <TableCell>{patient.DateOfBirth}</TableCell>
                                <TableCell>{patient.Gender}</TableCell>
                                <TableCell>{patient.Phone}</TableCell>
                                <TableCell>{patient.OfficePhone}</TableCell>
                                <TableCell>{patient.Email}</TableCell>
                                <TableCell>{patient.AddressLine1}</TableCell>
                                <TableCell>{patient.AddressLine2}</TableCell>
                                <TableCell>{patient.AddressCity}</TableCell>
                                <TableCell>{patient.AddressState}</TableCell>
                                <TableCell>{patient.AddressPostalCode}</TableCell>
                               
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        }

    </div>);
}

export default PatientContactList;