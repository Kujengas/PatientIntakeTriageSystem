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






//old jquery based example for reference of identity calls


/*
 var data = {
            Email: email,
            UserName: username,
            Password: password,
            ConfirmPassword: confirmpassword
        };

        $.ajax({
            type: 'POST',
            url: apiPrefix + '/Account/Register',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)

        }).done(function (data) {
            closeAllPanels();
            $("#LoginPanel").fadeIn();
            showSuccess("New User Account Created!");
        }).fail(showError);

         function login(username, password) {
        // var params = "grant_type=password&username=" + username + "&password=" + password;
        var loginData = {
            grant_type: 'password',
            username: username,
            password: password
        };

        ShowLoading();
        var user;
        $.ajax({
            type: 'POST',
            url: sitePrefix + '/Token',
            data: loginData

        }).done(function (data) {
            user = data.userName;
            // Cache the access token in session storage.
            window.localStorage.setItem(tokenKey, data.access_token);
            ShowMainMenu();
            showLoginSuccess(user);
        }).fail(showLoginError);
    }
 
 */







function Home() {

    const [data, setData] = useState({});
    const classes = useStyles();

    const authenticate = async () => {


        /*
        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'http://patientintake.shuthuluwhiskeyroses.com/api/Account/Register';
            var data = {
            "Email": "rico.ross2@gmailcom",
            "Password": "ddfsgsrecxRCVC@df2343",
            "ConfirmPassword":"ddfsgsrecxRCVC@df2343"
        };

  //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'http://patientintake.shuthuluwhiskeyroses.com/Token';

        var data = {
            "Username": "rico.ross@gmailcom",
            "Password": "ddfsgsreRCVC@df2343",
            "GrantType":"password"
        };

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        */

        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'http://patientintake.shuthuluwhiskeyroses.com/Token';

        data = {
            "Username": "rico.ross@gmailcom",
            "Password": "ddfsgsreRCVC@df2343",
            "GrantType": "password"
        };

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        // fetch(url);

        // const facilities = await response.json();
        console.log(response);

        // setData(data);
    }

    useEffect(() => {

    }, []);



    //const classes = useStyles();

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
                    </TableRow><TableRow>
                        <TableCell ColumnSpan="2">
                            <Button variant="contained" color="primary">
                                Login
                </Button>
                        </TableCell>   </TableRow></Table>

            </div>
        </form>
    );
}

export default Home;
