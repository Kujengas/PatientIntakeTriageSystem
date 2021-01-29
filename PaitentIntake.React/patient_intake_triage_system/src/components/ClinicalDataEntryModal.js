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

export default function ClinicalDataEntryModal({ encounterid }) {
    console.log(encounterid);
    const [open, setOpen] = useState(false);

   // const [encounterId, setEncounterId] = useState(encounterid);
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);

    const handleClickOpen = () => {

        console.log(encounterid);
        setOpen(true);
    };
    const handleClose = () => {

        setOpen(false);
    };

    const classes = styles;

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen} >
                Enter Clinical Data 
             </Button>

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" disableBackdropClick open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Clinical Data Entry
        </DialogTitle>
                <DialogContent dividers>
                    <ClinicalDataEntry encounterid={encounterid}  />
                </DialogContent>
                {/*   <DialogActions>
                    <Button autoFocus onClick="" disabled={isSaveDisabled} color="Secondary" >
                     Save Clinical Data
                     </Button>
                </DialogActions>*/}
            </Dialog>
        </div>
    );
}