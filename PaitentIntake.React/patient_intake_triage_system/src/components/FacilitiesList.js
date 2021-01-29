import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



const useStyles = makeStyles({

    paper: {
        borderRadius: 4,
        marginBlock: 30,
    },
});

function FacilitiesList() {

    const [facilities, setFacilities] = useState([]);
    const classes = useStyles();

    const fetchFacilities = async () => {

        //TODO: Move all api calls to a common store
        //reinvestigate redux as well as other alternatives
        const url = 'http://patientintake.shuthuluwhiskeyroses.com/api/location/';
        const response = await fetch(url);

        const facilities = await response.json();
        console.log(facilities);

        setFacilities(facilities);
    }

    useEffect(() => {
        fetchFacilities();
    }, []);


    return (

        <div>
            <GridList cellHeight={200} className={classes.gridList}>
                      {facilities.map(facility =>
                    <Link to={`/dashboard/${facility.Id}`}>
                        <Card className={classes.paper}>
                                  <CardContent>
                                      <div >
                                <h4> {facility.LocationDescription}</h4>
                                {
                                facility.AddressLine1 + "\r\n" + facility.AddressLine2 + " \r\n" +
                                facility.AddressCity + " " + facility.AddressState + " " + facility.AddressPostalCode

                            }</div>

                                  </CardContent>
                              </Card >
                          </Link>
                )}
            </GridList>
        </div>

    );
}

export default FacilitiesList;



 

