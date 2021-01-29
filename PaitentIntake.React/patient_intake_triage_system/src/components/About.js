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
import TextField from '@material-ui/core/TextField';
import PatientData from './ClinicalDataGrid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});


function About() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();


    useEffect(() => {
        fetchAttributeList();
    }, []);

    const handleSave = () => {


        saveEncounterAttributes();


    };

    const buildEncounter = () => {
      
        var attributeData = [];
        for (var a in data) {

            console.log(data);
            console.log(a);
            var controlId = "txt" + data[a].AttributeCode;

          
            if (document.getElementById(controlId).value != "") {
                attributeData.push(
                    {
                        Id: 1,
                        Data: document.getElementById(controlId).value || "",
                        AttributeCode: data[a].AttributeCode
                    }

                )
            }
        }
            console.log(attributeData);
            return attributeData;
        

    };


    const saveEncounterAttributes = async () => {

        const url = 'https://localhost:44382/api/Encounter/Attributes';

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(buildEncounter()),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(buildEncounter());


        //handleClose();
        console.log(response);
    }




    const fetchAttributeList = async () => {

        const url = 'https://localhost:44382/api/Encounter/AttributeFields/';

        const response = await fetch(url);

        const attributeList = await response.json();

        console.log(response);
        console.log(attributeList);

        setData(attributeList);
        setLoading(false);
    }

    //const classes = useStyles();

    return (<div>

        { loading ? <CircularProgress /> :


            <Paper className={classes.root}>
                <h1>attribute List</h1>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Attribute</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                data.map(attribute => 
                                    <TableRow>
                                        <TableCell>{attribute.Title}</TableCell>
                                        <TableCell>  <TextField label={attribute.Title} id={"txt" + attribute.AttributeCode} InputLabelProps={{ shrink: true }} /></TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={handleSave}>Save</Button>
            </Paper>

        }<PatientData/>

    </div >);
}

export default About;
