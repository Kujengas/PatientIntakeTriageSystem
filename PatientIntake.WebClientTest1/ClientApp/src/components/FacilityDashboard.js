import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/LocationsStore';

class FacilityDashboard extends Component {
    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate() {
        // This method is called when the route parameters change
        this.ensureDataFetched();
    }

    ensureDataFetched() {
       //// let query = useQuery();
       /// let locationId = query.get("location");
        this.props.requestLocationDashboard();
    }

    render() {
        return (
            <div>
                <h1>Patient Intake Facilities</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderLocationDashboardTables(this.props)}

            </div>
        );
    }
}

function renderLocationDashboardTables(props) {
    console.log(props);
      return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Location Name</th>
                        <th>Address Line 1</th>
                        <th>Address Line 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Office Phone</th>
                        <th>Fax</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.locationDashBoard.OpenEncounters.map(encounter =>
                        <tr key={encounter.Encounter_Id}>
                            <td>{encounter.Patients_FirstName}</td>
                            <td>{encounter.Patients_LastName}</td>
                            <td>{encounter.Patients_OfficePhone}</td>
                            <td>{encounter.Providers_Prefix}</td>
                            <td>{encounter.Providers_FirstName}</td>
                            <td>{encounter.Providers_LastName}</td>
                            <td>{encounter.Providers_Suffix}</td>
                            <td>{encounter.Providers_Phone}</td>
                            <td>{encounter.Encounter_Comments}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    return (<div />);
}


export default connect(
    state => state.locations,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FacilityDashboard);
