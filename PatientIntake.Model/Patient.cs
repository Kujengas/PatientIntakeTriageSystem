using System;

namespace PatientIntake.Model
{
    public class Patient
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
        public string PatientStatus { get; set; }
        public string Gender { get; set; }
        public string Marital_Status { get; set; }
        public string ContactBy { get; set; }
        public string Race { get; set; }
        public string SSN { get; set; }
        public string SpokenLanguage { get; set; }
        public string RespProv { get; set; }
        public string MRN { get; set; }
        public string Referredby { get; set; }
        public string EmpStatus { get; set; }
        public string SensChart { get; set; }
        public string HomeLocation { get; set; }
        public string ExternalID { get; set; }
    }
}
