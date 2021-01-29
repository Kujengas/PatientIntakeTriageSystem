import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 

function Facilities() {

   
    const [facilities, setFacilities] = useState([]);
  

   const fetchFacilities = async () => {

       const url = 'https://localhost:44382/api/location/';
      const response = await fetch(url);
        
       const facilities = await response.json();
       console.log(response);

       //setFacilities(facilities.);
    }

    useEffect(() => {
        fetchFacilities();
  }, []);

    return (
        <div>
            {facilities.map(facility =>
                <Link to={`/dashboard/${facility.Id}`}>
                    <div key={facility.Id} >
                        <h4>Location Name</h4>
                        <em>{facility.LocationDescription}</em>
                        <h4>Address Line 1</h4>
                        <em>{facility.AddressLine1}</em>
                        <h4>Address Line 2</h4>
                        <em>{facility.AddressLine2}</em>
                        <h4>City</h4>
                        <em>{facility.AddressCity}</em>
                        <h4>State</h4>
                        <em>{facility.AddressState}</em>
                        <h4>Postal Code</h4>
                        <em>{facility.AddressPostalCode}</em>
                        <h4>Office Phone</h4>
                        <em>{facility.OfficePhone}</em>
                        <h4>Fax</h4>
                        <em>{facility.Fax}</em>
                        <h4>Notes</h4>
                        <em>{facility.Notes}</em>
                    </div>
                </Link>
            )}
        </div>


        );

   // return (<div />);

}

export default Facilities;