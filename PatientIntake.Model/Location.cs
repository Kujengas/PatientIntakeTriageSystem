using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class Location
    {
        public int Id { get; set; }
        public string LocationDescription { get; set; }
        public string ReassignmentMessage { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressCity { get; set; }
        public string AddressState { get; set; }
        public string AddressPostalCode { get; set; }
        public string OfficePhone { get; set; }
        public string Fax { get; set; }
        public string Notes { get; set; }
    }
}
