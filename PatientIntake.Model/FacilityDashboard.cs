using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    class FacilityDashboard
    {
       public Location CurrentLocation { get; set; }
       public List<Provider> Providers { get; set; }
       public List<Patient> Patients { get; set; }
       public List<Room> Rooms { get; set; }   
    }
}
