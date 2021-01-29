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
    

    useEffect(() => {
        fetchProviderList();
    }, []);


    const fetchProviderList = async () => {
        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = `https://localhost:44382/api/Encounter/Attributes/${encounterId}`;

        const response = await fetch(url);

        const patientDataList = await response.json();

        console.log(response);
        console.log(patientDataList);

        setData(patientDataList);
        setLoading(false);

    }

    //const classes = useStyles();

    return (<div>

        { loading ? <CircularProgress /> :
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableBody>
                            {
                                data.map(patientData =>
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
