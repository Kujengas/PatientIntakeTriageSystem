using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
   public class EncounterAttribute
    {
        public int EncounterId { get; set; }
        public int AttributeId { get; set; }
        public string AttributeValue { get; set; }
        public string AttributeCode { get; set; }
        public string Title { get; set; }
        public string DataType { get; set; }
        public DateTime UpdateTime { get; set; }
    }
}
