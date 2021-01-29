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
import TableRow from '@material-ui/core/TableRow';
import ClinicalDataEntryModal from './ClinicalDataEntryModal';
import ClinicalDataViewModal from './ClinicalDataViewModal';


const useStyles = makeStyles((theme) => ({
    paper: {
        height: "100%",
        paddingTop: 5,
    }
}));

function FacilityDashboard({ match }) {
    const classes = useStyles();


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false);

    const fetchFacilityDashboard = async () => {

        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = `https://localhost:44382/api/location/${match.params.id}`;
        const response = await fetch(url);

        const facilityDashboard = await response.json();
        console.log(facilityDashboard);

        setData(facilityDashboard);
        setLoading(false);
    }

    useEffect(() => {
        fetchFacilityDashboard();
    }, {});


        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = (value) => {
            setOpen(false);
            fetchFacilityDashboard();
        };


    return (<div >
        {loading ? <CircularProgress /> :

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}><h1>{data.Facility.LocationDescription}</h1>
                   
                        <div>{data.Facility.AddressLine1}</div>
                        <div>{data.Facility.AddressLine2}</div>
                        <div>{data.Facility.AddressCity}, {data.Facility.AddressState}</div>
                     
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

                            {data.RoomOccupancy.map(room =>
                                <TableRow><TableCell>{room.Rooms_RoomDescription}</TableCell>
                                    <TableCell>{room.Rooms_Notes}</TableCell>
                                    <TableCell>{room.PatientCount}</TableCell>
                                    <TableCell>{room.LastAssignmentTime}</TableCell>
                                </TableRow>)}
                        </Table>
                    </Paper>
                    </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                       
<h1>Open Encounters</h1>
                        <Table>
                            <TableRow><TableCell>Name</TableCell>
                                <TableCell>Date of Birth</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Notes</TableCell></TableRow>

                            {data.OpenEncounters.map(encounter =>
                              <>  <TableRow>
                                    <TableCell>{encounter.Patients_FirstName} {encounter.Patients_LastName}</TableCell>
                                    <TableCell>{encounter.Patients_DateOfBirth}</TableCell>
                                    <TableCell>{encounter.Patients_Gender}</TableCell>
                                    <TableCell>{encounter.Patients_Phone}</TableCell>
                                    <TableCell>{encounter.Patients_Email}</TableCell>
                                    <TableCell>{encounter.Encounter_Comments}</TableCell> <TableCell>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                        <TableCell><ClinicalDataViewModal encounterid={encounter.Encounter_Id} /></TableCell>
                                        <TableCell><ClinicalDataEntryModal encounterid={encounter.Encounter_Id} /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell> 
                                </TableRow>
                                    </>
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

                            {data.Providers.map(provider =>
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
