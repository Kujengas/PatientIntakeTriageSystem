using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class RoomOccupancyResponse
    {
        public int? Rooms_Id { get; set; }
        public int? Rooms_LocationId { get; set; }
        public string Rooms_RoomDescription { get; set; }
        public string Rooms_Notes { get; set; }
        public int PatientCount { get; set; }
        public DateTime? LastAssignmentTime { get; set; }
    }
}
