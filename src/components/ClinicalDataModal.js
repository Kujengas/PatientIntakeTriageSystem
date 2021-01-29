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
import ClinicalDataEntry from './ClinicalDataEntry';



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
 * 
 * 
 *   
 * 
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


    return (
        <div>
         

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Enter Patient Details
             </Button>


            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" disableBackdropClick open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Create Encounter
        </DialogTitle>
                <DialogContent dividers>

                    <ClinicalDataEntry EncounterId={encounter.Id} />

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={saveEncounter} disabled={isSaveDisabled} color="Secondary" >
                        Save Encounter Data
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}