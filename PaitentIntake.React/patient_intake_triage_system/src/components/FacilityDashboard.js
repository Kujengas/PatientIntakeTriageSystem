import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import ClinicalDataEntryModal from './ClinicalDataEntryModal';
import ClinicalDataViewModal from './ClinicalDataViewModal';
import moment from 'moment';
import { checkInPatientEncounter, checkOutPatientEncounter, cancelPatientEncounter, assignEncounterToRoom } from '../store/api';
import { useSelector, useDispatch } from 'react-redux';
import { locationDashboardRequestAction } from '../store/actions';


const useStyles = makeStyles((theme) => ({
    paper: {
        height: "100%",
        paddingTop: 5,
    }
}));
const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function FacilityDashboard({ match }) {
    const classes = useStyles();


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    let locationDashboardState = useSelector(state => state.locationDashboard);


    const fetchFacilityDashboard = () => {
        dispatch(locationDashboardRequestAction(match.params.id));
    }

    useEffect(() => {
        fetchFacilityDashboard();
    }, {});


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickCheckIn = async (encounterId) => {
        await checkInPatientEncounter(encounterId)
        fetchFacilityDashboard();
    };

    const handleClickCheckOut = async (encounterId) => {
        await checkOutPatientEncounter(encounterId)
        fetchFacilityDashboard();
    };

    const handleClickCancel = async (encounterId) => {
        await cancelPatientEncounter(encounterId)
        fetchFacilityDashboard();
    };

    const handleClickAssign = async (encounterId, roomId) => {
        await assignEncounterToRoom({ EncounterId: encounterId, RoomId: roomId })
        fetchFacilityDashboard();
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

    const handleClose = (value) => {
        setOpen(false);
        fetchFacilityDashboard();
    };





    const EncounterRow = (props) => {

        const { encounter } = props;
        const [open, setOpen] = React.useState(false);
        const classes = useRowStyles();

        return (
            <React.Fragment>  <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{encounter.Patients_FirstName + " " + encounter.Patients_LastName}</TableCell>
                <TableCell>{getEncounterStatus(encounter).status}</TableCell>
                <TableCell>{moment(new Date(getEncounterStatus(encounter).statusTime)).calendar()}</TableCell>
                <TableCell>{encounter.Providers_Prefix + " " + encounter.Providers_FirstName + " " + encounter.Providers_LastName + " " + encounter.Providers_Suffix}</TableCell>

                <TableCell>
                </TableCell>
            </TableRow>
                <TableRow>
                    <TableCell colSpan="4">
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Encounter Details for {encounter.Patients_FirstName + " " + encounter.Patients_LastName}
                                </Typography>
                                <Table size="small" aria-label="details">
                                    <TableRow>
                                        <TableCell colspan="1">Date Of Birth:</TableCell>
                                        <TableCell colspan="3">{moment(new Date(encounter.Patients_DateOfBirth)).format('l')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1">Gender:</TableCell>
                                        <TableCell colspan="3">{encounter.Patients_Gender}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1">Phone:</TableCell>
                                        <TableCell colspan="3">{encounter.Patients_Phone}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1">Email:</TableCell>
                                        <TableCell colspan="3">{encounter.Patients_Email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="1">Scheduled Provider:</TableCell>
                                        <TableCell colspan="3">
                                            {encounter.Providers_Prefix + " " + encounter.Providers_FirstName + " " + encounter.Providers_LastName + " " + encounter.Providers_Suffix}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell colspan="1">Notes:</TableCell>
                                        <TableCell colspan="3">{encounter.Encounter_Comments}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colspan="4">   <Typography variant="h6" gutterBottom component="div">Actions</Typography></TableCell>
                                    </TableRow>
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

    return (<div >
        {locationDashboardState.isLocationDashboardLoading ? <CircularProgress /> :

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}><h1>{locationDashboardState.dashboard.Facility.LocationDescription}</h1>

                        <div>{locationDashboardState.dashboard.Facility.AddressLine1}</div>
                        <div>{locationDashboardState.dashboard.Facility.AddressLine2}</div>
                        <div>{locationDashboardState.dashboard.Facility.AddressCity}, {locationDashboardState.dashboard.Facility.AddressState}</div>

                    </Paper>

                </Grid>
                <Grid item xs={12} sm={6}> <Paper className={classes.paper}>
                    <h1>Room Occupancy</h1>
                    <Table>

                        <TableRow><TableCell>Room Name/Description</TableCell>
                            <TableCell>Additional Details</TableCell>
                            <TableCell># of Patients Assigned</TableCell>
                            <TableCell>Last Assignment Time</TableCell>
                        </TableRow>

                        {locationDashboardState.dashboard.RoomOccupancy.map(room =>
                            <TableRow><TableCell>{room.Rooms_RoomDescription}</TableCell>
                                <TableCell>{room.Rooms_Notes}</TableCell>
                                <TableCell>{room.PatientCount}</TableCell>
                                <TableCell>{(room.LastAssignmentTime != null)?moment(new Date(room.LastAssignmentTime)).calendar():''}</TableCell>
                            </TableRow>)}
                    </Table>
                </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>

                        <h1>Open Encounters</h1>
                        <Table>
                            <TableRow>  <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Provider</TableCell>
                            </TableRow>

                            {locationDashboardState.dashboard.OpenEncounters.map(encounter =>
                                <EncounterRow key={encounter.Encounter_Id} encounter={encounter} />
                            )}
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h1>Scheduled Providers</h1>
                        <Table>

                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Cell Phone</TableCell>
                                <TableCell>Office Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Areas Of Practice</TableCell></TableRow>

                            {locationDashboardState.dashboard.Providers.map(provider =>
                                <TableRow>
                                    <TableCell>{provider.Prefix}{provider.FirstName} {provider.LastName}{provider.Suffix}</TableCell>
                                    <TableCell>{provider.Phone}</TableCell>
                                    <TableCell>{provider.OfficePhone}</TableCell>
                                    <TableCell>{provider.Email}</TableCell>
                                    <TableCell>{provider.AreasOfPractice}</TableCell>
                                </TableRow>
                            )}
                        </Table>

                    </Paper>
                </Grid>

            </Grid>}

    </div>
    );
}

export default FacilityDashboard;