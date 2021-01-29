import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PatientSearch from './PatientSearch';
import ProviderSearch from './ProviderSearch';
import LocationSearch from './LocationSearch';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const styles = (theme) => ({
    root: {
        margin: 0,
        width: 400,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    paper: {
        marginBlock: 30
    }

       
   
});


/*

    Id:
    PatientId:
    LocationId:
    RoomId:
    ProviderId:
    CreationTime:
    ScheduledTime:
    ArrivalTime:
    CheckInTime:
    AssignmentTime:
    CheckOutTime:
    CancelTime:
    Comments:
   */


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CreateEncounterModal({ locationId='' }) {
    console.log(locationId);
    const [open, setOpen] = useState(false);
    const [patient, setPatient] = useState({});
    const [provider, setProvider] = useState({});
    const [comment, setComment] = useState("");
    const [scheduledDate, setScheduledDate] = useState();
    const [encounter, setEncounter] = useState({});
    const [location, setLocation] = useState({});
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {

        setPatient({});
        setProvider({});
        setComment("");
        setScheduledDate(null)
        setOpen(false);
    };

  
   
    const classes = styles;

    useEffect(() => {

    }, []);


    const buildEncounter = () => {
        setIsSaveDisabled(!canSave());

        return ({
            PatientId: patient.Id || '',
            ProviderId: provider.Id || '',
            LocationId: location.Id||'',
            ScheduledTime: scheduledDate ||'',//document.getElementById('scheduleTime').value||''
            Comments:comment
        });

    };


    const saveEncounter = async () => {

      


        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'https://localhost:44382/api/Encounter';

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(buildEncounter()),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(buildEncounter());
     

        handleClose();
        console.log(response);
    }

    const handleChange = (event, newValue) => {

        console.log("changed!!");
        console.log(event);
        console.log(newValue || null);

        switch (event){
            case "patientSearch":
                setPatient(newValue);
                break;
            case "providerSearch":
                setProvider(newValue);
                break;
            case "locationSearch":
                setLocation(newValue);
                break;

        }
        console.log(buildEncounter());
    };

    const timeHandler = (e) => {
        setScheduledDate(e.target.value);
        console.log(buildEncounter());
    }

    const notesHandler = (e) => {

        console.log(e);
       setComment(e.target.value);
       console.log(buildEncounter());
    }

    const canSave = () => {
        if (scheduledDate == "") { return false;}
        if (patient.Id == null) { return false; }
        if (location.Id == null) { return false; }

        return true;
    };

    return (
        <div>
         

            <ListItem button onClick={handleClickOpen} >
                <ListItemIcon> <ScheduleIcon /></ListItemIcon>
                <ListItemText primary="Create Encounter" />
            </ListItem>


            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" disableBackdropClick open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Create Encounter
        </DialogTitle>
                <DialogContent dividers>
                   
                        <Paper className={classes.paper}>



                       
                        <LocationSearch id="locationSearch"  isRequired="required" onChange={handleChange} />

                        <br/>

                            <PatientSearch id="patientSearch" isRequired="required" onChange={handleChange} />
                            <br />
                        <TextField 
                                id="scheduleTime"
                                label="Next appointment"
                                type="datetime-local"
                            defaultValue={Date.now} onChange={timeHandler}
                            className={classes.textField} required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <br />
                        <ProviderSearch id="providerSearch" onChange={handleChange} />
                        <br />
                        <TextField
                            id="additionalNote"
                            label="Additional Note"
                            onChange={notesHandler}
                            className={classes.textField} 
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        </Paper>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={saveEncounter} disabled={isSaveDisabled} color="Secondary" >
                        Save Encounter
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}