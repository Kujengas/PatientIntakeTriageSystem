using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using PatientIntake.Model;

namespace PatientIntake.DataAccess
{
    public class LocationData
    {

     
        public static int CreateLocation(Location location)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@LocationDescription", location.LocationDescription));
            parameters.Add(new SqlParameter("@ReassignmentMessage", location.ReassignmentMessage));
            parameters.Add(new SqlParameter("@AddressLine1", location.AddressLine1));
            parameters.Add(new SqlParameter("@AddressLine2", location.AddressLine2));
            parameters.Add(new SqlParameter("@AddressCity", location.AddressCity));
            parameters.Add(new SqlParameter("@AddressState", location.AddressState));
            parameters.Add(new SqlParameter("@AddressPostalCode", location.AddressPostalCode));
            parameters.Add(new SqlParameter("@OfficePhone", location.OfficePhone));
            parameters.Add(new SqlParameter("@Fax", location.Fax));
            parameters.Add(new SqlParameter("@Notes", location.Notes));

            return Database.ExecuteCommand("CreateLocation", parameters);

        }

        public static int UpdateLocation(Location location)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@Id", location.Id));
            parameters.Add(new SqlParameter("@LocationDescription", location.LocationDescription));
            parameters.Add(new SqlParameter("@ReassignmentMessage", location.ReassignmentMessage));
            parameters.Add(new SqlParameter("@AddressLine1", location.AddressLine1));
            parameters.Add(new SqlParameter("@AddressLine2", location.AddressLine2));
            parameters.Add(new SqlParameter("@AddressCity", location.AddressCity));
            parameters.Add(new SqlParameter("@AddressState", location.AddressState));
            parameters.Add(new SqlParameter("@AddressPostalCode", location.AddressPostalCode));
            parameters.Add(new SqlParameter("@OfficePhone", location.OfficePhone));
            parameters.Add(new SqlParameter("@Fax", location.Fax));
            parameters.Add(new SqlParameter("@Notes", location.Notes));

            return Database.ExecuteCommand("CreateLocation", parameters);

        }

        public static List<Location> GetLocations()
        {
            var lst = new List<Location>();
            var parameters = new List<SqlParameter>();
            DataTable dt = Database.GetDataTable("GetLocations", parameters); 
                
             lst = (from DataRow row in dt.Rows
                            select new Location
                            {
                                Id = Convert.ToInt32(row["Id"]),
                                LocationDescription = row["LocationDescription"].ToString(),
                                AddressCity = row["AddressCity"].ToString(),
                                AddressLine1 = row["AddressLine1"].ToString(),
                                AddressLine2 = row["AddressLine2"].ToString(),
                                AddressPostalCode = row["AddressPostalCode"].ToString(),
                                AddressState = row["AddressState"].ToString(),
                                Fax = row["Fax"].ToString(),
                                Notes = row["Notes"].ToString(),
                                OfficePhone = row["OfficePhone"].ToString(),
                                ReassignmentMessage = row["ReassignmentMessage"].ToString()

                                //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                            }).ToList();
            return lst;
        }

        public static Location GetLocation(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@Id", id));
            DataTable dt = Database.GetDataTable("GetLocationById", parameters);

            return  (from DataRow row in dt.Rows
                   select new Location
                   {
                       Id = Convert.ToInt32(row["Id"]),
                       LocationDescription = row["LocationDescription"].ToString(),
                       AddressCity = row["AddressCity"].ToString(),
                       AddressLine1 = row["AddressLine1"].ToString(),
                       AddressLine2 = row["AddressLine2"].ToString(),
                       AddressPostalCode = row["AddressPostalCode"].ToString(),
                       AddressState = row["AddressState"].ToString(),
                       Fax = row["Fax"].ToString(),
                       Notes = row["Notes"].ToString(),
                       OfficePhone = row["OfficePhone"].ToString(),
                       ReassignmentMessage = row["ReassignmentMessage"].ToString()

                       //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                   }).FirstOrDefault(); 
        }

        public static List<RoomOccupancyResponse> GetRoomOccupancyByLocationId(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@LocationId", id));
            DataTable dt = Database.GetDataTable("GetRoomOccupancyByLocationId", parameters);

            return (from DataRow row in dt.Rows
                    select new RoomOccupancyResponse
                    {
                        Rooms_Id = ((row["Rooms_Id"] != DBNull.Value) ? Convert.ToInt32(row["Rooms_Id"]) : (Int32?)null),
              
                        Rooms_LocationId = ((row["Rooms_LocationId"] != DBNull.Value) ? Convert.ToInt32(row["Rooms_LocationId"]) : (Int32?)null),
                     
                        Rooms_RoomDescription = row["Rooms_RoomDescription"].ToString(),
                        Rooms_Notes = row["Rooms_Notes"].ToString(),
                        PatientCount =  Convert.ToInt32(row["PatientCount"]),
                        LastAssignmentTime = row["LastAssignmentTime"] != DBNull.Value ? Convert.ToDateTime(row["LastAssignmentTime"]) : (DateTime?)null,
                    

                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                    }).ToList();
        }




       // flattemed datatable for encounters grid
        public static List<OpenEncountersResponse> GetOpenEncountersByLocationId(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@LocationId", id));
            DataTable dt = Database.GetDataTable("GetOpenEncountersByLocationId", parameters);

            return (from DataRow row in dt.Rows
                    select new OpenEncountersResponse
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

                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                    }).ToList();
        }

        public static List<Provider> GetScheduledProvidersByLocationId(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@LocationId", id));
            DataTable dt = Database.GetDataTable("GetScheduledProvidersByLocationId", parameters);

            return (from DataRow row in dt.Rows
                    select new Provider
                    {
                        Id = Convert.ToInt32(row["Providers_Id"]),
                        FirstName = row["Providers_FirstName"].ToString(),
                        LastName = row["Providers_LastName"].ToString(),
                        MiddleName = row["Providers_MiddleName"].ToString(),
                        Suffix = row["Providers_Suffix"].ToString(),
                        Prefix = row["Providers_Prefix"].ToString(),
                        DateOfBirth = Convert.ToDateTime(row["Providers_DateOfBirth"]),
                        Phone = row["Providers_Phone"].ToString(),
                        Email = row["Providers_Email"].ToString(),
                        AddressLine1 = row["Providers_AddressLine1"].ToString(),
                        AddressLine2 = row["Providers_AddressLine2"].ToString(),
                        AddressCity = row["Providers_AddressCity"].ToString(),
                        AddressState = row["Providers_AddressState"].ToString(),
                        AddressPostalCode = row["Providers_AddressPostalCode"].ToString(),
                        OfficePhone = row["Providers_OfficePhone"].ToString(),
                        Fax = row["Providers_Fax"].ToString(),
                        License = row["Providers_License"].ToString(),
                        AreasOfPractice = row["Providers_AreasOfPractice"].ToString()

                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),
                    }).ToList();
        }

    }
}
