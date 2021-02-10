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
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { patientListRequestAction } from '../store/actions';

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

    const patientListState = useSelector(state => state.patientList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(patientListRequestAction());
    }, []);

   const classes = useStyles();

    return (<div>

        { patientListState.isPatientListLoading ? <CircularProgress /> :

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
                            {patientListState.patients.map(patient =>
                            <TableRow>
                                <TableCell>{patient.FirstName} {patient.LastName}</TableCell>
                                <TableCell>{moment(new Date(patient.DateOfBirth)).format('l')}</TableCell> 
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