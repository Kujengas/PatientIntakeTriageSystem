using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class Room
    {
        public int Id { get; set; }
        public int LocationId { get; set; }
        public string RoomDescription { get; set; }
        public string Notes { get; set; }
    }
}
