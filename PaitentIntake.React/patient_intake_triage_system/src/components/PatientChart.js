import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { patientChartRequestAction } from '../store/actions';
import { checkInPatientEncounter, checkOutPatientEncounter, cancelPatientEncounter, assignEncounterToRoom } from '../store/api';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ClinicalDataEntryModal from './ClinicalDataEntryModal';
import ClinicalDataViewModal from './ClinicalDataViewModal';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    hiddenRow: {
        display: "none",
    },
    visibleRow: {
        display: "block",
    }
});

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


const handleClickCheckIn = async (encounterId) => {
    await checkInPatientEncounter(encounterId)
  
};

const handleClickCheckOut = async (encounterId) => {
    await checkOutPatientEncounter(encounterId)

};

const handleClickCancel = async (encounterId) => {
    await cancelPatientEncounter(encounterId)

};

const handleClickAssign = async (encounterId, roomId) => {
    await assignEncounterToRoom({ EncounterId: encounterId, RoomId: roomId })
};

const getEncounterStatus = (encounter) => {

    if (encounter.Encounter_CancelTime != null) {
        return {
            status: 'Canceled', statusTime: encounter.Encounter_CancelTime
        };
    }
    if (encounter.Encounter_CheckoutTime != null) {
        return {
            status: 'Checked Out', statusTime: encounter.Encounter_CheckoutTime
        };
    }
    if (encounter.Encounter_AssignmentTime != null) {
        return {
            status: 'Assigned To Room', statusTime: encounter.Encounter_AssignmentTime
        };
    }
    if (encounter.Encounter_CheckInTime != null) {
        return {
            status: 'Checked In', statusTime: encounter.Encounter_CheckInTime
        };
    }
    if (encounter.Encounter_ScheduledTime != null) {
        return {
            status: 'Scheduled', statusTime: encounter.Encounter_ScheduledTime
        };
    }

    return {
        status: 'Created', statusTime: encounter.Encounter_CreateTime
    };

};


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


function PatientChart({ match }) {

    const patientChartState = useSelector(state => state.patientChart);



    const [patientDemographicsRows, setPatientDemographicsRows] = useState(<TableRow />);
    const [patientContactRows, setPatienContactRows] = useState(<TableRow />);
    const [patientEncountersRows, setPatientEncountersRows] = useState(<TableRow />);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(patientChartRequestAction(match.params.id));
    }, {});

    useEffect(() => {
        //setPatientTable(renderPatientRows());
        setPatientDemographicsRows(renderPatientDemographics());
        setPatienContactRows(renderPatientContactInfo());
        setPatientEncountersRows(renderPatientEncounters());
    }, [patientChartState]);

    const classes = useStyles();


    const renderPatientDemographics = () => {
        return (
            <React.Fragment> <TableRow >
                <TableCell colSpan={6}>
                    <h4>Demographics</h4>
                </TableCell>
            </TableRow>
                <TableRow >
                    <TableCell>Last Name:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.LastName}</TableCell>
                    <TableCell>First Name:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.FirstName}</TableCell>
                    <TableCell>Middle Name:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.MiddleName}</TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Date of Birth:</TableCell>
                    <TableCell>{moment(new Date(patientChartState.chart.Demographics.DateOfBirth)).format('l')}</TableCell>
                    <TableCell>Sex:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.Gender}</TableCell>
                    <TableCell>Ethnicity:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.Race}</TableCell>
                </TableRow>
            </React.Fragment>);
    }
    const renderPatientContactInfo = () => {
        return (
            <React.Fragment >
                <TableRow >
                    <TableCell colSpan={6}>
                        <h4>Contact Information</h4>
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Phone:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.Phone}</TableCell>
                    <TableCell>Office Phone:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.OfficePhone}</TableCell>
                    <TableCell>Email:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.Email}</TableCell>
                </TableRow>
                <TableRow >
                    <TableCell >Address Line 1:</TableCell>
                    <TableCell colSpan={2}>{patientChartState.chart.Demographics.AddressLine1}</TableCell>
                    <TableCell>Address Line 2:</TableCell>
                    <TableCell colSpan={2}>{patientChartState.chart.Demographics.AddressLine2}</TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>City:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.AddressCity}</TableCell>
                    <TableCell>State:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.AddressState}</TableCell>
                    <TableCell>Postal Code:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.AddressPostalCode}</TableCell>
                </TableRow>
                <TableRow >
                    <TableCell>Prefered Contact Method:</TableCell>
                    <TableCell>{patientChartState.chart.Demographics.ContactBy}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </React.Fragment>);
    }

    const renderPatientEncounters = () => {
        return (
            <React.Fragment >
                <TableRow >
                    <TableCell colSpan={6}>
                        <h4>Encounters</h4>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={6}>
                        <Table>
                            <TableRow>  <TableCell></TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Provider</TableCell>
                            </TableRow>
                            {patientChartState.chart.Encounters.map(encounter =>
                                <EncounterRow key={encounter.Encounter_Id} encounter={encounter} />
                            )}
                        </Table>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    };



    const EncounterRow = (props) => {

        const { encounter } = props;
        const [open, setOpen] = React.useState(false);
        const classes = useRowStyles();


        const getAtributeByCode = (code) => {
            var attribute = encounter.Encounter_Attributes.find(attribute => attribute.AttributeCode === code);

            if (attribute == null) {
                attribute = {
                    AttributeCode: '',
                    AttributeValue: '',
                    AttributeTitle:''
                };
            }

            return  attribute;
        }

        /*
         
         
height
weight
respiration
blood_preasure_systolic
blood_preasure_diastolic
heart_rate
ekg
temperature
blood_o2
o2_flow_rate
blood_sugar
meal_status
chief_compliant
pain_levels
         */

        return (
            <React.Fragment>  <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{getEncounterStatus(encounter).status}</TableCell>
                <TableCell>{moment(new Date(getEncounterStatus(encounter).statusTime)).calendar()}</TableCell>
                <TableCell>{encounter.Providers_Prefix + " " + encounter.Providers_FirstName + " " + encounter.Providers_LastName + " " + encounter.Providers_Suffix}</TableCell>

                <TableCell>
                </TableCell>
            </TableRow>
                <TableRow>
                    <TableCell colSpan="3">
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Patient Vitals for {encounter.Patients_FirstName + " " + encounter.Patients_LastName}
                                </Typography>
                                <Table size="small" aria-label="details">
                                    <TableRow>
                                        <TableCell colspan="1">Height:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("height").AttributeValue}</TableCell>
                                    
                                        <TableCell colspan="1">Weight:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("weight").AttributeValue}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1">Respiration:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("respiration").AttributeValue}</TableCell>
                                        <TableCell colspan="1">Temeperature:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("temperature").AttributeValue}</TableCell>                                  
                                    </TableRow>
                                    <TableRow>

                                       <TableCell colspan="1">Heart Rate:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("heart_rate").AttributeValue}</TableCell>
                                        <TableCell colspan="1">EKG:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("ekg").AttributeValue}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                       
                                        <TableCell colspan="1">Systolic Blood Presure:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("blood_preasure_systolic").AttributeValue}</TableCell>  
                                        <TableCell colspan="1">Diastolic Blood Presure:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("blood_preasure_diastolic").AttributeValue}</TableCell>  
                                      
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1">Blood O2%:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("blood_o2").AttributeValue}</TableCell>
                                        <TableCell colspan="1">O2 Flow Rate L/min:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("o2_flow_rate").AttributeValue}</TableCell>                                     
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1"> Blood Sugar mg/dL:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("blood_sugar").AttributeValue}</TableCell>
                                        <TableCell colspan="1">Meal Status:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("meal_status").AttributeValue}</TableCell>                           
                                    </TableRow>

                                    <TableRow>
                                        <TableCell colspan="1">Chief Complaint:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("chief_complaint").AttributeValue}</TableCell>
                                        <TableCell colspan="1">Pain Levels:</TableCell>
                                        <TableCell colspan="2">{getAtributeByCode("pain_levels").AttributeValue}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell colspan="1">Notes:</TableCell>
                                        <TableCell colspan="2">{encounter.Encounter_Comments}</TableCell>
                                    </TableRow>
                                </Table>
                                <Typography variant="h6" gutterBottom component="div">Encounter Timeline</Typography>
                                <Table>
                                   <TableRow> 
                                        <TableCell>Creation Time:</TableCell><TableCell>   {encounter.Encounter_CreationTime}</TableCell>
                                        <TableCell>Schedule Time:</TableCell><TableCell>   {encounter.Encounter_ScheduleTime}</TableCell>
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell>Arrival Time:</TableCell><TableCell>   {encounter.Encounter_ArrivalTime}</TableCell>
                                        <TableCell>Check In Time:</TableCell><TableCell>   {encounter.Encounter_CheckInTime}</TableCell>
                                       
                                      
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell>Assignment Time:</TableCell><TableCell>   {encounter.Encounter_AssignmentTime}</TableCell>
                                        <TableCell>Assigned Room:</TableCell><TableCell>   {encounter.Rooms_RoomDescription}</TableCell>
                                    </TableRow>
                                    <TableRow> 
                                        <TableCell>Check Out Time:</TableCell><TableCell>   {encounter.Encounter_CheckOutTime}</TableCell>
                                        <TableCell>Cancel Time:</TableCell><TableCell>    {encounter.Encounter_CancelTime}</TableCell>

                                    </TableRow>
                                </Table>


                                <Typography variant="h6" gutterBottom component="div">Encounter Actions</Typography>
                                <Table>
                                    <TableRow>
                                        <TableCell><ClinicalDataViewModal encounterid={encounter.Encounter_Id} /></TableCell>
                                        <TableCell><ClinicalDataEntryModal encounterid={encounter.Encounter_Id} /></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>
                                            <Button variant="outlined" color="secondary" disabled={encounter.Encounter_CheckInTime != null} onClick={e => handleClickCheckIn(encounter.Encounter_Id)} className={classes.button}>
                                                Check In
                                                </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outlined" color="secondary" disabled={(encounter.Encounter_CheckInTime == null || encounter.Encounter_AssignmentTime != null)} onClick={e => handleClickAssign(encounter.Encounter_Id, 1)} className={classes.button}>
                                                Assign To Room
                                                </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outlined" color="secondary" disabled={(encounter.Encounter_CheckInTime == null || encounter.Encounter_CheckoutTime != null)} onClick={e => handleClickCheckOut(encounter.Encounter_Id)} className={classes.button}>
                                                Check Out
                                                </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outlined" color="secondary" disabled={encounter.Encounter_CancelTime != null} onClick={() => handleClickCancel(encounter.Encounter_Id)} className={classes.button}>
                                                Cancel
                                                </Button>
                                        </TableCell>
                                    </TableRow></Table></Box></Collapse></TableCell></TableRow>
            </React.Fragment>
        );
    }


    return (<div>

        { patientChartState.isPatientChartLoading ? <CircularProgress /> :
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                        <Table>
                            <TableRow><TableCell colSpan={6}><h1>Patient Chart for {patientChartState.chart.Demographics.FirstName + " " + patientChartState.chart.Demographics.LastName}</h1></TableCell></TableRow>
                            {patientDemographicsRows}
                           {patientContactRows}
                           {patientEncountersRows}

                        </Table>
                    </Paper>

                </Grid></Grid>
        }

    </div>);
}

export default PatientChart;