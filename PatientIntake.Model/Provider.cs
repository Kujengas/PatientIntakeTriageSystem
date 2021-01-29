using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class Provider
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Suffix { get; set; }
        public string Prefix { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressCity { get; set; }
        public string AddressState { get; set; }
        public string AddressPostalCode { get; set; }
        public string OfficePhone { get; set; }
        public string Fax { get; set; }
        public string License { get; set; }
        public string AreasOfPractice { get; set; }

    }
}
