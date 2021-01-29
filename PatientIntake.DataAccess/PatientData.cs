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
                    }).FirstOrDefault();
        }

    }
}
