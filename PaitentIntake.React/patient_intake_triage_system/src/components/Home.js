import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));


function Home() {

    const [data, setData] = useState({});
    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <Table>
                    <TableRow>
                        <TableCell>Username</TableCell><TableCell>
                            <TextField
                                label="Username"
                                id="outlined-size-normal"
                                defaultValue=""
                                variant="outlined" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Password</TableCell>
                        <TableCell>
                            <TextField
                                label="Password" type="password"
                                id="outlined-size-normal"
                                defaultValue=""
                                variant="outlined" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell ColumnSpan="2">
                            <Button variant="contained" color="primary">
                                Login
                            </Button>
                        </TableCell>
                    </TableRow>
                </Table>
            </div>
        </form>
    );
}

export default Home;
