import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { locationListRequestAction } from '../store/actions';

const useStyles = makeStyles({

    paper: {
        borderRadius: 4,
        marginBlock: 30,
    },
});

function FacilitiesList() {

    //const [facilities, setFacilities] = useState([]);
    const classes = useStyles();

    const locationListState = useSelector(state => state.locationList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (locationListState.locations.length == 0) {
            dispatch(locationListRequestAction());
        } //else { setLoading(false);}
    }, []);


    return (
        <div>    {
            locationListState.isLocationListLoading ? <CircularProgress /> :

                <GridList cellHeight={200} className={classes.gridList}>
                    {locationListState.locations.map(facility =>
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
                </GridList>}
        </div>

    );
}

export default FacilitiesList;



 

