using System;
using System.Collections.Generic;
using System.Text;

namespace PatientIntake.Model
{
    public class OpenEncountersResponse
    {
        public int? Encounter_Id { get; set; } 
        public int? Encounter_PatientId { get; set; }
        public int? Encounter_LocationId { get; set; }
        public int? Encounter_RoomId { get; set; }
        public int? Encounter_ProviderId { get; set; }
        public DateTime? Encounter_CreationTime { get; set; }
        public DateTime? Encounter_ScheduledTime { get; set; }
        public DateTime? Encounter_ArrivalTime { get; set; }
        public DateTime? Encounter_CheckInTime { get; set; }
        public DateTime? Encounter_AssignmentTime { get; set; }
        public DateTime? Encounter_CheckOutTime { get; set; }
        public DateTime? Encounter_CancelTime { get; set; }
        public string Encounter_Comments { get; set; }
        public int Patients_Id { get; set; }
        public string Patients_FirstName { get; set; }
        public string Patients_LastName { get; set; }
        public string Patients_MiddleName { get; set; }
        public string Patients_Suffix { get; set; }
        public string Patients_Prefix { get; set; }
        public DateTime? Patients_DateOfBirth { get; set; }
        public string Patients_Phone { get; set; }
        public string Patients_Email { get; set; }
        public string Patients_AddressLine1 { get; set; }
        public string Patients_AddressLine2 { get; set; }
        public string Patients_AddressCity { get; set; }
        public string Patients_AddressState { get; set; }
        public string Patients_AddressPostalCode { get; set; }
        public string Patients_OfficePhone { get; set; }
        public string Patients_Fax { get; set; }
        public string Patients_PatientStatus { get; set; }
        public string Patients_Gender { get; set; }
        public string Patients_Marital_Status { get; set; }
        public string Patients_ContactBy { get; set; }
        public string Patients_Race { get; set; }
        public string Patients_SSN { get; set; }
        public string Patients_SpokenLanguage { get; set; }
        public string Patients_RespProv { get; set; }
        public string Patients_MRN { get; set; }
        public string Patients_Referredby { get; set; }
        public string Patients_EmpStatus { get; set; }
        public string Patients_SensChart { get; set; }
        public string Patients_HomeLocation { get; set; }
        public string Patients_ExternalID { get; set; }
        public int? Providers_Id { get; set; }
        public string Providers_FirstName { get; set; }
        public string Providers_LastName { get; set; }
        public string Providers_MiddleName { get; set; }
        public string Providers_Suffix { get; set; }
        public string Providers_Prefix { get; set; }
        public DateTime? Providers_DateOfBirth { get; set; }
        public string Providers_Phone { get; set; }
        public string Providers_Email { get; set; }
        public string Providers_AddressLine1 { get; set; }
        public string Providers_AddressLine2 { get; set; }
        public string Providers_AddressCity { get; set; }
        public string Providers_AddressState { get; set; }
        public string Providers_AddressPostalCode { get; set; }
        public string Providers_OfficePhone { get; set; }
        public string Providers_Fax { get; set; }
        public string Providers_License { get; set; }
        public string Providers_AreasOfPractice { get; set; }
        public int? Rooms_Id { get; set; }
        public int? Rooms_LocationId { get; set; }
        public string Rooms_RoomDescription { get; set; }
        public string Rooms_Notes { get; set; }


    }
}
