using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
   public class Encounter
    {
        public int? Id { get; set; }
        public int? PatientId { get; set; }
        public int? LocationId { get; set; }
        public int? RoomId { get; set; }
        public int? ProviderId { get; set; }
        public DateTime? CreationTime { get; set; }
        public DateTime? ScheduledTime { get; set; }
        public DateTime? ArrivalTime { get; set; }
        public DateTime? CheckInTime { get; set; }
        public DateTime? AssignmentTime { get; set; }
        public DateTime? CheckOutTime { get; set; }
        public DateTime? CancelTime { get; set; }
        public string Comments { get; set; }

    }
}
