import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';
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
    hiddenRow: {
        display:"none",
    },
     visibleRow: {
        display: "block",
    }
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
    const [currentFilter, setCurrentFilter] = useState("");
    const [patientTableRows, setPatientTable] = useState("");


  

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(patientListRequestAction());
    }, []);

    useEffect(() => {
      setPatientTable(renderPatientRows());
    
    }, [patientListState,currentFilter]);

   const classes = useStyles();

   const history = useHistory();


    const handleFilter = (event) => {
        console.log(event);
        console.log("Filter--" + event.target.value);
        if (event.nativeEvent.data != "") {
            setCurrentFilter(event.target.value);
        } else { setCurrentFilter(""); }
    };

    const handleRowClick = (patientId) => {

        console.log("Patient Clicked--" + patientId);
        history.push(`/patient/${patientId}`);
    };



    const checkFilter = (patientName) => {
        return (currentFilter == "" || patientName.toLowerCase().includes(currentFilter.toLowerCase()));
    };


    const renderPatientRows = () => {
        return (
            patientListState.patients.filter(patient => checkFilter(patient.FirstName + " " + patient.LastName)).map(patient =>
                <TableRow hover={true} onClick={() => handleRowClick(patient.Id)}>
                    <TableCell>{patient.FirstName} {patient.LastName}</TableCell>
                    <TableCell>{moment(new Date(patient.DateOfBirth)).format('l')}</TableCell>
                    <TableCell>{patient.Gender}</TableCell>
                    <TableCell>{patient.Phone}</TableCell>
                    <TableCell>{patient.OfficePhone}</TableCell>
                    <TableCell>{patient.Email}</TableCell>
                </TableRow>
            )
            );
    }


    return (<div>

        { patientListState.isPatientListLoading ? <CircularProgress /> :

            <Paper className={classes.root}>
               <Table>
                        <TableHead> <TableRow>
                            <TableCell colSpan={4}><h1>Patient List</h1></TableCell>
                            <TableCell colSpan={2}><TextField label="Filter" id="patientFilter" onChange={(event) => { handleFilter(event) }} InputLabelProps={{ shrink: true }} /></TableCell>
                        </TableRow></TableHead>
                    </Table>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table"> 
                      <TableHead>                        
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Work Phone</TableCell>
                            <TableCell>Email</TableCell>               
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {patientTableRows}
                        </TableBody>
                    </Table>
                </TableContainer>
         </Paper>
        }

    </div>);
}

export default PatientContactList;