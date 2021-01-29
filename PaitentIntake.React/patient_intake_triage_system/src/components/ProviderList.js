import React,{useState,useEffect } from 'react';
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
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});


    function ProviderList() {

        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const classes = useStyles();


        useEffect(() => {
            fetchProviderList();
        }, []);


        const fetchProviderList = async () => {
            //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'http://patientintake.shuthuluwhiskeyroses.com/api/Provider';

            const response = await fetch(url);

            const providerList = await response.json();

            console.log(response);
            console.log(providerList);

            setData(providerList);
            setLoading(false);

        }

        //const classes = useStyles();

        return (<div>

            { loading ? <CircularProgress /> :



                <Paper className={classes.root}>
                    <h1>Provider List</h1>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date of Birth</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Work Phone</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Address Line 1</TableCell >
                                    <TableCell>Address Line 2</TableCell >
                                    <TableCell>City</TableCell >
                                    <TableCell>State</TableCell >
                                    <TableCell>Postal Code</TableCell >
                                    <TableCell>Areas Of Practice</TableCell >
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    data.map(provider =>
                                        <TableRow>
                                            <TableCell>{provider.Prefix}{provider.FirstName} {provider.LastName}{provider.Suffix}</TableCell>
                                            <TableCell>{moment(new Date(provider.DateOfBirth)).format('l')}</TableCell>             
                                            <TableCell>{provider.Phone}</TableCell>
                                            <TableCell>{provider.OfficePhone}</TableCell>
                                            <TableCell>{provider.Email}</TableCell>
                                            <TableCell>{provider.AddressLine1}</TableCell>
                                            <TableCell>{provider.AddressLine2}</TableCell>
                                            <TableCell>{provider.AddressCity}</TableCell>
                                            <TableCell>{provider.AddressState}</TableCell>
                                            <TableCell>{provider.AddressPostalCode}</TableCell>
                                            <TableCell>{provider.AreasOfPractice}</TableCell>

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

export default ProviderList;

