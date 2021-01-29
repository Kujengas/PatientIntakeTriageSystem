using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class DashBoardResponse
    {
        public Location Facility { get; set; }
        public List<OpenEncountersResponse> OpenEncounters { get; set; }
        public List<RoomOccupancyResponse> RoomOccupancy { get; set; }
        public List<Provider> Providers { get; set; }
    }
}
