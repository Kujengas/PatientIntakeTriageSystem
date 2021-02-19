using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class PatientChart
    {
        public Patient Demographics { get; set; } = new Patient();
        public List<EncounterDataResponse> Encounters { get; set; } = new List<EncounterDataResponse>();
    }
}
