import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { createPatientRequestAction, patientListRequestAction} from '../store/actions';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 0,
        padding: theme.spacing(2),
    },
    button: {
        marginRight: theme.spacing(1),
        marginTop: 50,

    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

export default function NewPatientStepperModal() {


    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const steps = getSteps();


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


        //const response = savePatient(patient);

       // console.log(response);

        dispatch(createPatientRequestAction(patient));
        dispatch(patientListRequestAction());
        handleClose();
       
    }

    function getSteps() {
        return ['Patient Demographics', 'Patient Contact Information'];
    }

    const renderDemographicsForm = () => {
        return (
            <Grid container spacing={5} padding={10}>
                <Grid container item xs={12} spacing={5}>
                    <TextField label="Last Name" id="txtLastName" InputLabelProps={{ shrink: true }} />
                    <TextField label="First Name" id="txtFirstName" InputLabelProps={{ shrink: true }} />
                    <TextField label="Middle Name" id="txtMiddleName" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid container item xs={12} spacing={5}>

                    <TextField label="Suffix" id="txtSuffix" InputLabelProps={{ shrink: true }} />
                    <TextField label="Prefix" id="txtPrefix" InputLabelProps={{ shrink: true }} />
                    <TextField label="SSN" id="txtSSN" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid container item xs={12} spacing={5}>
                    <TextField label="Date Of Birth" id="txtDateOfBirth" InputLabelProps={{ shrink: true }} type="date" />
                    <TextField label="Gender" id="txtGender" InputLabelProps={{ shrink: true }} />
                    <TextField label="Race" id="txtRace" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid container item xs={12} spacing={5}>
                    <TextField label="Spoken Language" id="txtSpokenLanguage" InputLabelProps={{ shrink: true }} />
                    <TextField label="Marital Status" id="txtMarital_Status" InputLabelProps={{ shrink: true }} />
                </Grid>
            </Grid>
        );
    }

    const renderContactForm = () => {
        return (<Grid container spacing={8} >
            <Grid container item xs={12} spacing={5}>
                <TextField label="Address Line1" id="txtAddressLine1" InputLabelProps={{ shrink: true }} />
                <TextField label="Address Line2" id="txtAddressLine2" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid container item xs={12} spacing={5}>
                <TextField label="Address City" id="txtAddressCity" InputLabelProps={{ shrink: true }} />
                <TextField label="Address State" id="txtAddressState" InputLabelProps={{ shrink: true }} />
                <TextField label="Address PostalCode" id="txtAddressPostalCode" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid container item xs={12} spacing={5}>
                <TextField label="Phone" id="txtPhone" InputLabelProps={{ shrink: true }} />
                <TextField label="Office Phone" id="txtOfficePhone" InputLabelProps={{ shrink: true }} />
                <TextField label="Fax" id="txtFax" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid container item xs={12} spacing={5}>
                <TextField label="Email" id="txtEmail" InputLabelProps={{ shrink: true }} />
                <TextField label="Contact By" id="txtContactBy" InputLabelProps={{ shrink: true }} />
            </Grid>
        </Grid>);
    }

    const allSteps = [];

    const populateSteps = () => {

        allSteps.push(renderDemographicsForm());
        allSteps.push(renderContactForm());
    }

    const getStepContent = (step) =>{

        return (<>
            {allSteps.map(
                (stepCmp, index) => {
                    return <div hidden={index !== step}>{stepCmp}</div>
                })
            }
        </>
        );

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        save();
    };

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    const DialogTitle = withStyles(useStyles)((props) => {
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

    populateSteps();

    return (
        <div>
            <ListItem button onClick={handleClickOpen} >
                <ListItemIcon> <PersonAddIcon /></ListItemIcon>
                <ListItemText primary="Add Patient" />
            </ListItem>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Patient Registry
        </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.root}>
                        <Stepper nonLinear activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepButton onClick={handleStep(index)} completed={completed[index]}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back</Button>
                                <Button disabled={activeStep === 1}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}>
                                    Next</Button>

                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSave} color="Secondary">
                        Save Patient
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
