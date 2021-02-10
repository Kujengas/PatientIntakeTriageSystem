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
//import { getEncounterClinicalData } from '../store/api';
import { useSelector, useDispatch } from 'react-redux';
import { getEncounterClinicalDataRequestAction } from '../store/actions';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});


function ClinicalData({ encounterid }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    const [encounterId, setEncounterId] = useState(encounterid);
    
    const encounterClinicalData = useSelector(state => state.loadedEncounterClinicalData);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchClinicalData();
   
    }, {});


    const fetchClinicalData = () => {
 
       // const patientDataList = await getEncounterClinicalData(encounterId);

        dispatch(getEncounterClinicalDataRequestAction(encounterId));

      //  console.log(patientDataList);

      //  setData(patientDataList);
       // setLoading(false);

    }

    //const classes = useStyles();

    return (<div>

        { encounterClinicalData.isClinicalDataLoading ? <CircularProgress /> :
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableBody>
                            {
                                encounterClinicalData.clinicalData.map(patientData =>
                                    <TableRow>
                                        <TableCell>{patientData.Title}</TableCell>
                                        <TableCell>{patientData.AttributeValue}</TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        }

    </div >);
}

export default ClinicalData;
