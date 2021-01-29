import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Router} from 'react-router-dom';
import { actionCreators } from '../store/LocationsStore';


class Locations extends Component {
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
        this.props.requestLocationList();
    }

   
    render() {
        return (
            <div>
                <h1>Patient Intake Facilities</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderLocationsTable(this.props)}
            </div>
        );
    }
}


function renderLocationsTable(props) {
    console.log(props);

    function handleClick(e, data) {
        //props.requestLocationDashboard(data.Id)
        // onClick={(e) => handleClick(e, location)}
        props.history.push('/dashboard?locationId=/'+data.Id); 
        console.log(props);

    }
        return (

              <div>
                {props.locationList.map(location =>
                    <Link to={`/dashboard/${location.Id}`}>
                        <div key={location.Id} >
                            <h4>Location Name</h4>
                            <em>{location.LocationDescription}</em>
                            <h4>Address Line 1</h4>
                            <em>{location.AddressLine1}</em>
                            <h4>Address Line 2</h4>
                            <em>{location.AddressLine2}</em>
                            <h4>City</h4>
                            <em>{location.AddressCity}</em>
                            <h4>State</h4>
                            <em>{location.AddressState}</em>
                            <h4>Postal Code</h4>
                            <em>{location.AddressPostalCode}</em>
                            <h4>Office Phone</h4>
                            <em>{location.OfficePhone}</em>
                            <h4>Fax</h4>
                            <em>{location.Fax}</em>
                            <h4>Notes</h4>
                            <em>{location.Notes}</em>
                        </div>
                    </Link>
                    )}
             </div>
        );
}


export default connect(
    state => state.locations,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Locations);
