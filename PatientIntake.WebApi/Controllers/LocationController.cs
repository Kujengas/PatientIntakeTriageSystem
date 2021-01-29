using PatientIntake.DataAccess;
using PatientIntake.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PatientIntake.WebApi.Controllers
{
     public class LocationController : ApiController
    {

        // GET: api/Location
        public IEnumerable<Location> Get()
        {
            return LocationData.GetLocations();
        }

        // GET: api/Location/5
        public DashBoardResponse GetDashboard(int id)
        {

            return new DashBoardResponse
            {
                Facility = LocationData.GetLocation(id),
                OpenEncounters = LocationData.GetOpenEncountersByLocationId(id),
                RoomOccupancy = LocationData.GetRoomOccupancyByLocationId(id),
                Providers = LocationData.GetScheduledProvidersByLocationId(id)
            };
        }

        // POST: api/Location
        public void Post([FromBody] Location location)
        {
            LocationData.CreateLocation(location);
        }

        // PUT: api/Location
        public void Put([FromBody] Location location)
        {
            LocationData.UpdateLocation(location);
        }

        /*
        // DELETE: api/Location/5
        public void Delete([FromBody] Location location)
        {

        }
        */
    }
}
