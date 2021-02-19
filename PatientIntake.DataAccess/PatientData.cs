using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using PatientIntake.Model;

namespace PatientIntake.DataAccess
{
    public class PatientData
    {


        public static int CreatePatient(Patient patient)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@FirstName", patient.FirstName ?? String.Empty));
            parameters.Add(new SqlParameter("@LastName", patient.LastName ?? String.Empty));
            parameters.Add(new SqlParameter("@MiddleName", patient.MiddleName ?? String.Empty));
            parameters.Add(new SqlParameter("@Suffix", patient.Suffix ?? String.Empty));
            parameters.Add(new SqlParameter("@Prefix", patient.Prefix ?? String.Empty));
            parameters.Add(new SqlParameter("@DateOfBirth", patient.DateOfBirth));
            parameters.Add(new SqlParameter("@Phone", patient.Phone ?? String.Empty));
            parameters.Add(new SqlParameter("@Email", patient.Email ?? String.Empty));
            parameters.Add(new SqlParameter("@AddressLine1", patient.AddressLine1 ?? String.Empty));
            parameters.Add(new SqlParameter("@AddressLine2", patient.AddressLine2 ?? String.Empty));
            parameters.Add(new SqlParameter("@AddressCity", patient.AddressCity ?? String.Empty));
            parameters.Add(new SqlParameter("@AddressState", patient.AddressState ?? String.Empty));
            parameters.Add(new SqlParameter("@AddressPostalCode", patient.AddressPostalCode ?? String.Empty));
            parameters.Add(new SqlParameter("@OfficePhone", patient.OfficePhone ?? String.Empty));
            parameters.Add(new SqlParameter("@Fax", patient.Fax ?? String.Empty));
            parameters.Add(new SqlParameter("@PatientStatus", patient.PatientStatus ?? String.Empty));
            parameters.Add(new SqlParameter("@Gender", patient.Gender ?? String.Empty));
            parameters.Add(new SqlParameter("@Marital_Status", patient.Marital_Status ?? String.Empty));
            parameters.Add(new SqlParameter("@ContactBy", patient.ContactBy ?? String.Empty));
            parameters.Add(new SqlParameter("@Race", patient.Race ?? String.Empty));
            parameters.Add(new SqlParameter("@SSN", patient.SSN ?? String.Empty));
            parameters.Add(new SqlParameter("@SpokenLanguage", patient.SpokenLanguage ?? String.Empty));
            parameters.Add(new SqlParameter("@RespProv", patient.RespProv ?? String.Empty));
            parameters.Add(new SqlParameter("@MRN", patient.MRN ?? String.Empty));
            parameters.Add(new SqlParameter("@Referredby", patient.Referredby ?? String.Empty));
            parameters.Add(new SqlParameter("@EmpStatus", patient.EmpStatus ?? String.Empty));
            parameters.Add(new SqlParameter("@SensChart", patient.SensChart ?? String.Empty));
            parameters.Add(new SqlParameter("@HomeLocation", patient.HomeLocation ?? String.Empty));
            parameters.Add(new SqlParameter("@ExternalID", patient.ExternalID ?? String.Empty));

            return Database.ExecuteCommand("CreatePatient", parameters);

        }

        public static int UpdatePatient(Patient patient)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@Id", patient.Id));
            parameters.Add(new SqlParameter("@FirstName", patient.FirstName));
            parameters.Add(new SqlParameter("@LastName", patient.LastName));
            parameters.Add(new SqlParameter("@MiddleName", patient.MiddleName));
            parameters.Add(new SqlParameter("@Suffix", patient.Suffix));
            parameters.Add(new SqlParameter("@Prefix", patient.Prefix));
            parameters.Add(new SqlParameter("@DateOfBirth", patient.DateOfBirth));
            parameters.Add(new SqlParameter("@Phone", patient.Phone));
            parameters.Add(new SqlParameter("@Email", patient.Email));
            parameters.Add(new SqlParameter("@AddressLine1", patient.AddressLine1));
            parameters.Add(new SqlParameter("@AddressLine2", patient.AddressLine2));
            parameters.Add(new SqlParameter("@AddressCity", patient.AddressCity));
            parameters.Add(new SqlParameter("@AddressState", patient.AddressState));
            parameters.Add(new SqlParameter("@AddressPostalCode", patient.AddressPostalCode));
            parameters.Add(new SqlParameter("@OfficePhone", patient.OfficePhone));
            parameters.Add(new SqlParameter("@Fax", patient.Fax));
            parameters.Add(new SqlParameter("@PatientStatus", patient.PatientStatus));
            parameters.Add(new SqlParameter("@Gender", patient.Gender));
            parameters.Add(new SqlParameter("@Marital_Status", patient.Marital_Status));
            parameters.Add(new SqlParameter("@ContactBy", patient.ContactBy));
            parameters.Add(new SqlParameter("@Race", patient.Race));
            parameters.Add(new SqlParameter("@SSN", patient.SSN));
            parameters.Add(new SqlParameter("@SpokenLanguage", patient.SpokenLanguage));
            parameters.Add(new SqlParameter("@RespProv", patient.RespProv));
            parameters.Add(new SqlParameter("@MRN", patient.MRN));
            parameters.Add(new SqlParameter("@Referredby", patient.Referredby));
            parameters.Add(new SqlParameter("@EmpStatus", patient.EmpStatus));
            parameters.Add(new SqlParameter("@SensChart", patient.SensChart));
            parameters.Add(new SqlParameter("@HomeLocation", patient.HomeLocation));
            parameters.Add(new SqlParameter("@ExternalID", patient.ExternalID));

            return Database.ExecuteCommand("UpdatePatient", parameters);

        }

        public static List<Patient> GetPatients()
        {
            var lst = new List<Patient>();
            var parameters = new List<SqlParameter>();
            DataTable dt = Database.GetDataTable("GetPatients", parameters);

            lst = (from DataRow row in dt.Rows
                   select new Patient
                   {
                       Id = Convert.ToInt32(row["Id"]),
                       FirstName = row["FirstName"].ToString(),
                       LastName = row["LastName"].ToString(),
                       MiddleName = row["MiddleName"].ToString(),
                       Suffix = row["Suffix"].ToString(),
                       Prefix = row["Prefix"].ToString(),
                       DateOfBirth = Convert.ToDateTime(row["DateOfBirth"]),
                       Phone = row["Phone"].ToString(),
                       Email = row["Email"].ToString(),
                       AddressLine1 = row["AddressLine1"].ToString(),
                       AddressLine2 = row["AddressLine2"].ToString(),
                       AddressCity = row["AddressCity"].ToString(),
                       AddressState = row["AddressState"].ToString(),
                       AddressPostalCode = row["AddressPostalCode"].ToString(),
                       OfficePhone = row["OfficePhone"].ToString(),
                       Fax = row["Fax"].ToString(),
                       PatientStatus = row["PatientStatus"].ToString(),
                       Gender = row["Gender"].ToString(),
                       Marital_Status = row["Marital_Status"].ToString(),
                       ContactBy = row["ContactBy"].ToString(),
                       Race = row["Race"].ToString(),
                       SSN = row["SSN"].ToString(),
                       SpokenLanguage = row["SpokenLanguage"].ToString(),
                       RespProv = row["RespProv"].ToString(),
                       MRN = row["MRN"].ToString(),
                       Referredby = row["Referredby"].ToString(),
                       EmpStatus = row["EmpStatus"].ToString(),
                       SensChart = row["SensChart"].ToString(),
                       HomeLocation = row["HomeLocation"].ToString(),
                       ExternalID = row["ExternalID"].ToString()

                       //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                   }).ToList();
            return lst;
        }

        public static Patient GetPatient(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@Id", id));
            DataTable dt = Database.GetDataTable("GetPatientById", parameters);

            return (from DataRow row in dt.Rows
                    select new Patient
                    {
                        Id = Convert.ToInt32(row["Id"]),
                        FirstName = row["FirstName"].ToString(),
                        LastName = row["LastName"].ToString(),
                        MiddleName = row["MiddleName"].ToString(),
                        Suffix = row["Suffix"].ToString(),
                        Prefix = row["Prefix"].ToString(),
                        DateOfBirth = Convert.ToDateTime(row["DateOfBirth"]).Date,
                        Phone = row["Phone"].ToString(),
                        Email = row["Email"].ToString(),
                        AddressLine1 = row["AddressLine1"].ToString(),
                        AddressLine2 = row["AddressLine2"].ToString(),
                        AddressCity = row["AddressCity"].ToString(),
                        AddressState = row["AddressState"].ToString(),
                        AddressPostalCode = row["AddressPostalCode"].ToString(),
                        OfficePhone = row["OfficePhone"].ToString(),
                        Fax = row["Fax"].ToString(),
                        PatientStatus = row["PatientStatus"].ToString(),
                        Gender = row["Gender"].ToString(),
                        Marital_Status = row["Marital_Status"].ToString(),
                        ContactBy = row["ContactBy"].ToString(),
                        Race = row["Race"].ToString(),
                        SSN = row["SSN"].ToString(),
                        SpokenLanguage = row["SpokenLanguage"].ToString(),
                        RespProv = row["RespProv"].ToString(),
                        MRN = row["MRN"].ToString(),
                        Referredby = row["Referredby"].ToString(),
                        EmpStatus = row["EmpStatus"].ToString(),
                        SensChart = row["SensChart"].ToString(),
                        HomeLocation = row["HomeLocation"].ToString(),
                        ExternalID = row["ExternalID"].ToString()

                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),
                    }).FirstOrDefault();
        }


        // flattened datatable for encounters grid
        public static List<EncounterDataResponse> GetEncountersByPatientId(int id)
        {
            List<EncounterDataResponse> list = new List<EncounterDataResponse>();
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@PatientId", id));
            DataTable dt = Database.GetDataTable("GetEncountersByPatientId", parameters);

            list = (from DataRow row in dt.Rows
                    select new EncounterDataResponse
                    {
                        Encounter_Id = ((row["Encounter_Id"] != DBNull.Value) ? Convert.ToInt32(row["Encounter_Id"]) : (Int32?)null),
                        Encounter_PatientId = ((row["Encounter_PatientId"] != DBNull.Value) ? Convert.ToInt32(row["Encounter_PatientId"]) : (Int32?)null),

                        Encounter_LocationId = ((row["Encounter_LocationId"] != DBNull.Value) ? Convert.ToInt32(row["Encounter_LocationId"]) : (Int32?)null),

                        Encounter_RoomId = ((row["Encounter_RoomId"] != DBNull.Value) ? Convert.ToInt32(row["Encounter_RoomId"]) : (Int32?)null),

                        Encounter_ProviderId = ((row["Encounter_ProviderId"] != DBNull.Value) ? Convert.ToInt32(row["Encounter_ProviderId"]) : (Int32?)null),

                        Encounter_CreationTime = row["Encounter_CreationTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_CreationTime"]) : (DateTime?)null,
                        Encounter_ScheduledTime = row["Encounter_ScheduledTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_ScheduledTime"]) : (DateTime?)null,
                        Encounter_ArrivalTime = row["Encounter_ArrivalTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_ArrivalTime"]) : (DateTime?)null,
                        Encounter_CheckInTime = row["Encounter_CheckInTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_CheckInTime"]) : (DateTime?)null,
                        Encounter_AssignmentTime = row["Encounter_AssignmentTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_AssignmentTime"]) : (DateTime?)null,
                        Encounter_CheckOutTime = row["Encounter_CheckOutTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_CheckOutTime"]) : (DateTime?)null,
                        Encounter_CancelTime = row["Encounter_CancelTime"] != DBNull.Value ? Convert.ToDateTime(row["Encounter_CancelTime"]) : (DateTime?)null,
                        Encounter_Comments = row["Encounter_Comments"].ToString(),
                        Patients_Id = Convert.ToInt32(row["Patients_Id"]),
                        Patients_FirstName = row["Patients_FirstName"].ToString(),
                        Patients_LastName = row["Patients_LastName"].ToString(),
                        Patients_MiddleName = row["Patients_MiddleName"].ToString(),
                        Patients_Suffix = row["Patients_Suffix"].ToString(),
                        Patients_Prefix = row["Patients_Prefix"].ToString(),
                        Patients_DateOfBirth = row["Patients_DateOfBirth"] != DBNull.Value ? Convert.ToDateTime(row["Patients_DateOfBirth"]).Date : (DateTime?)null,
                        Patients_Phone = row["Patients_Phone"].ToString(),
                        Patients_Email = row["Patients_Email"].ToString(),
                        Patients_AddressLine1 = row["Patients_AddressLine1"].ToString(),
                        Patients_AddressLine2 = row["Patients_AddressLine2"].ToString(),
                        Patients_AddressCity = row["Patients_AddressCity"].ToString(),
                        Patients_AddressState = row["Patients_AddressState"].ToString(),
                        Patients_AddressPostalCode = row["Patients_AddressPostalCode"].ToString(),
                        Patients_OfficePhone = row["Patients_OfficePhone"].ToString(),
                        Patients_Fax = row["Patients_Fax"].ToString(),
                        Patients_PatientStatus = row["Patients_PatientStatus"].ToString(),
                        Patients_Gender = row["Patients_Gender"].ToString(),
                        Patients_Marital_Status = row["Patients_Marital_Status"].ToString(),
                        Patients_ContactBy = row["Patients_ContactBy"].ToString(),
                        Patients_Race = row["Patients_Race"].ToString(),
                        Patients_SSN = row["Patients_SSN"].ToString(),
                        Patients_SpokenLanguage = row["Patients_SpokenLanguage"].ToString(),
                        Patients_RespProv = row["Patients_RespProv"].ToString(),
                        Patients_MRN = row["Patients_MRN"].ToString(),
                        Patients_Referredby = row["Patients_Referredby"].ToString(),
                        Patients_EmpStatus = row["Patients_EmpStatus"].ToString(),
                        Patients_SensChart = row["Patients_SensChart"].ToString(),
                        Patients_HomeLocation = row["Patients_HomeLocation"].ToString(),
                        Patients_ExternalID = row["Patients_ExternalID"].ToString(),
                        Providers_Id = ((row["Providers_Id"] != DBNull.Value) ? Convert.ToInt32(row["Providers_Id"]) : (Int32?)null),
                        Providers_FirstName = row["Providers_FirstName"].ToString(),
                        Providers_LastName = row["Providers_LastName"].ToString(),
                        Providers_MiddleName = row["Providers_MiddleName"].ToString(),
                        Providers_Suffix = row["Providers_Suffix"].ToString(),
                        Providers_Prefix = row["Providers_Prefix"].ToString(),
                        Providers_DateOfBirth = row["Providers_DateOfBirth"] != DBNull.Value ? Convert.ToDateTime(row["Providers_DateOfBirth"]).Date : (DateTime?)null,
                        Providers_Phone = row["Providers_Phone"].ToString(),
                        Providers_Email = row["Providers_Email"].ToString(),
                        Providers_AddressLine1 = row["Providers_AddressLine1"].ToString(),
                        Providers_AddressLine2 = row["Providers_AddressLine2"].ToString(),
                        Providers_AddressCity = row["Providers_AddressCity"].ToString(),
                        Providers_AddressState = row["Providers_AddressState"].ToString(),
                        Providers_AddressPostalCode = row["Providers_AddressPostalCode"].ToString(),
                        Providers_OfficePhone = row["Providers_OfficePhone"].ToString(),
                        Providers_Fax = row["Providers_Fax"].ToString(),
                        Providers_License = row["Providers_License"].ToString(),
                        Providers_AreasOfPractice = row["Providers_AreasOfPractice"].ToString(),
                        Rooms_Id = ((row["Rooms_Id"] != DBNull.Value) ? Convert.ToInt32(row["Rooms_Id"]) : (Int32?)null),
                        Rooms_LocationId = ((row["Rooms_LocationId"] != DBNull.Value) ? Convert.ToInt32(row["Rooms_LocationId"]) : (Int32?)null),
                        Rooms_RoomDescription = row["Rooms_RoomDescription"].ToString(),
                        Rooms_Notes = row["Rooms_Notes"].ToString(),
                        Encounter_Attributes = row["Encounter_Id"] != DBNull.Value ? EncounterData.GetAttributeValuesByEncounter(Convert.ToInt32(row["Encounter_Id"])) : new List<EncounterAttribute>()
                        
                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                    }).ToList();

            return list;
        }




    }
}
