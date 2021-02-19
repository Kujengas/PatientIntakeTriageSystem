import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getAttributeList } from '../store/api';
import { useSelector, useDispatch } from 'react-redux';
import { saveEncounterClinicalDataRequestAction, attributeListRequestAction } from '../store/actions';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

function ClinicalDataEntry({ encounterid }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    const [encounterId, setEncounterId] = useState(encounterid);


   // const attributeList = useSelector(state => state.attributeList);
   const dispatch = useDispatch();

    


    useEffect(() => {
        fetchAttributeList();
    }, []);

    const handleSave = () => {       
       dispatch(saveEncounterClinicalDataRequestAction(buildEncounter()));
    };

    const buildEncounter = () => {

        var attributeData = [];
        for (var a in data) {

            console.log(data);
            console.log(a);

            console.log("encounterID:"+encounterid);
            var controlId = "txt" + data[a].AttributeCode;

            console.log(controlId);
            if (document.getElementById(controlId).value != "") {
                attributeData.push(
                    {
                        Id: encounterid,
                        Data: document.getElementById(controlId).value || "",
                        AttributeCode: data[a].AttributeCode
                    }

                )
            }
        }
       console.log(attributeData);
        return attributeData;
    };

    const fetchAttributeList = async () => {
       // dispatch(attributeListRequestAction());
       const  attributeList = await getAttributeList();
     
       // console.log(attributeList);
        setData(attributeList);
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
        }

    </div >);
}

export default ClinicalDataEntry;
