using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using PatientIntake.Model;
using System.Data.SqlTypes;

namespace PatientIntake.DataAccess
{
    public class EncounterData
    {

        public static int CreateEncounter(Encounter encounter)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@PatientId", encounter.PatientId.HasValue ? encounter.PatientId.Value : SqlInt32.Null));
            parameters.Add(new SqlParameter("@LocationId", encounter.LocationId.HasValue ? encounter.LocationId.Value : SqlInt32.Null));
            parameters.Add(new SqlParameter("@RoomId", encounter.RoomId.HasValue ? encounter.RoomId.Value : SqlInt32.Null));
            parameters.Add(new SqlParameter("@ProviderId", encounter.ProviderId.HasValue ? encounter.ProviderId.Value : SqlInt32.Null));
            parameters.Add(new SqlParameter("@CreationTime", encounter.CreationTime.HasValue ? encounter.CreationTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@ScheduledTime", encounter.ScheduledTime.HasValue ? encounter.ScheduledTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@ArrivalTime", encounter.ArrivalTime.HasValue ? encounter.ArrivalTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@CheckInTime", encounter.CheckInTime.HasValue ? encounter.CheckInTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@AssignmentTime", encounter.AssignmentTime.HasValue ? encounter.AssignmentTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@CheckOutTime", encounter.CheckOutTime.HasValue ? encounter.CheckOutTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@CancelTime", encounter.CancelTime.HasValue ? encounter.CancelTime.Value : SqlDateTime.Null));
            parameters.Add(new SqlParameter("@Comments", encounter.Comments ?? String.Empty));

            return Database.ExecuteCommand("CreateEncounter", parameters);

        }

        public static int UpdateEncounter(Encounter encounter)
        {
            int result = -1;
            var parameters = new List<SqlParameter>();
            try
            {
                parameters.Add(new SqlParameter("@Id", encounter.Id));
                parameters.Add(new SqlParameter("@PatientId", encounter.PatientId));
                parameters.Add(new SqlParameter("@LocationId", encounter.LocationId));
                parameters.Add(new SqlParameter("@RoomId", encounter.RoomId));
                parameters.Add(new SqlParameter("@ProviderId", encounter.ProviderId));
                parameters.Add(new SqlParameter("@CreationTime", encounter.CreationTime));
                parameters.Add(new SqlParameter("@ScheduledTime", encounter.ScheduledTime));
                parameters.Add(new SqlParameter("@ArrivalTime", encounter.ArrivalTime));
                parameters.Add(new SqlParameter("@CheckInTime", encounter.CheckInTime));
                parameters.Add(new SqlParameter("@AssignmentTime", encounter.AssignmentTime));
                parameters.Add(new SqlParameter("@CheckOutTime", encounter.CheckOutTime));
                parameters.Add(new SqlParameter("@CancelTime", encounter.CancelTime));
                parameters.Add(new SqlParameter("@Comments", encounter.Comments));

                result = Database.ExecuteCommand("UpdateEncounter", parameters);
            }
            catch (Exception ex)
            {

            }
            return result;
        }

        public static List<Encounter> GetEncounters()
        {
            var lst = new List<Encounter>();
            var parameters = new List<SqlParameter>();
            try
            {
                DataTable dt = Database.GetDataTable("GetEncounters", parameters);

                lst = (from DataRow row in dt.Rows
                       select new Encounter
                       {
                           PatientId = Convert.ToInt32(row["PatientId"]),
                           LocationId = Convert.ToInt32(row["LocationId"]),
                           RoomId = Convert.ToInt32(row["RoomId"]),
                           ProviderId = Convert.ToInt32(row["ProviderId"]),
                           CreationTime = Convert.ToDateTime(row["CreationTime"]),
                           ScheduledTime = Convert.ToDateTime(row["ScheduledTime"]),
                           ArrivalTime = Convert.ToDateTime(row["ArrivalTime"]),
                           CheckInTime = Convert.ToDateTime(row["CheckInTime"]),
                           AssignmentTime = Convert.ToDateTime(row["AssignmentTime"]),
                           CheckOutTime = Convert.ToDateTime(row["CheckOutTime"]),
                           CancelTime = Convert.ToDateTime(row["CancelTime"]),
                           Comments = row["Comments"].ToString()

                           //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                       }).ToList();
            }
            catch (Exception ex)
            {

            }

            return lst;
        }

        public static Encounter GetEncounter(int id)
        {

            var parameters = new List<SqlParameter>();
            Encounter encounter = new Encounter();
            try
            {
                parameters.Add(new SqlParameter("@Id", id));
                DataTable dt = Database.GetDataTable("GetEncounterById", parameters);

                encounter = (from DataRow row in dt.Rows
                             select new Encounter
                             {
                                 Id = Convert.ToInt32(row["Id"]),
                                 PatientId = Convert.ToInt32(row["PatientId"]),
                                 LocationId = Convert.ToInt32(row["LocationId"]),
                                 RoomId = Convert.ToInt32(row["RoomId"]),
                                 ProviderId = Convert.ToInt32(row["ProviderId"]),
                                 CreationTime = Convert.ToDateTime(row["CreationTime"]),
                                 ScheduledTime = Convert.ToDateTime(row["ScheduledTime"]),
                                 ArrivalTime = Convert.ToDateTime(row["ArrivalTime"]),
                                 CheckInTime = Convert.ToDateTime(row["CheckInTime"]),
                                 AssignmentTime = Convert.ToDateTime(row["AssignmentTime"]),
                                 CheckOutTime = Convert.ToDateTime(row["CheckOutTime"]),
                                 CancelTime = Convert.ToDateTime(row["CancelTime"]),
                                 Comments = row["Comments"].ToString()

                                 //CreatedDate = Convert.ToDateTime(row["CreationDate"]),
                             }).FirstOrDefault();

            }
            catch (Exception ex)
            {

            }

            return encounter;
        }

        public static List<EncounterAttribute> GetAttributeValuesByEncounter(int id)
        {
            var lst = new List<EncounterAttribute>();

            try
            {
                var parameters = new List<SqlParameter>();
                parameters.Add(new SqlParameter("@EncounterId", id));
                DataTable dt = Database.GetDataTable("GetAttributeValuesByEncounter", parameters);

                lst = (from DataRow row in dt.Rows
                       select new EncounterAttribute
                       {
                           EncounterId = Convert.ToInt32(row["EncounterId"]),
                           AttributeId = Convert.ToInt32(row["AttributeId"]),
                           AttributeValue = row["AttributeValue"].ToString(),
                           AttributeCode = row["AttributeCode"].ToString(),
                           Title = (row["Title"]).ToString(),
                           DataType = row["DataType"].ToString(),
                           UpdateTime = Convert.ToDateTime(row["UpdateTime"]),


                           //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                       }).ToList();
            }
            catch (Exception ex)
            {

            }
            return lst;
        }

        public static List<AttributeField> GetAttributeList()
        {
            var lst = new List<AttributeField>();
            var parameters = new List<SqlParameter>();
            try
            {
                DataTable dt = Database.GetDataTable("GetAttributeList", parameters);

                lst = (from DataRow row in dt.Rows
                       select new AttributeField
                       {
                           Id = Convert.ToInt32(row["Id"]),
                           AttributeCode = row["AttributeCode"].ToString(),
                           Title = (row["Title"]).ToString(),
                           DataType = row["DataType"].ToString(),

                           //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                       }).ToList();
            }
            catch (Exception ex)
            {

            }
            return lst;
        }

        public static int InsertAttributeList(List<IdAttributeDTO> attributeList)
        {
            try
            {
                DataTable table = new DataTable();

                table.Columns.Add("Id", typeof(int));
                table.Columns.Add("DataValue", typeof(string));
                table.Columns.Add("AttributeCode", typeof(string));

                foreach (IdAttributeDTO attr in attributeList)
                {
                    table.Rows.Add(
                       attr.Id,
                       attr.Data,
                       attr.AttributeCode
                       );
                }


                var parameters = new List<SqlParameter>();

                parameters.Add(new SqlParameter("@TVP", table));

                return Database.ExecuteCommand("InsertAttributesForEncounter", parameters);

            }
            catch (Exception ex)
            {
                return -1;
            }
        }


        public static int CheckInPatientByEncounterId(int id)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@EncounterId", id));
           
            return Database.ExecuteCommand("CheckInPatientByEncounterId", parameters);
        }

        public static int AssignEncounterToRoom(RoomAssignmentDTO dto)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@EncounterId", dto.EncounterId));
            parameters.Add(new SqlParameter("@RoomId", dto.RoomId));

            return Database.ExecuteCommand("AssignEncounterToRoom", parameters);
        }


        public static int CheckOutPatientByEncounterId(int id)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@EncounterId", id));

            return Database.ExecuteCommand("CheckOutPatientByEncounterId", parameters);
        }

        public static int CancelEncounter(int id)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@EncounterId", id));

            return Database.ExecuteCommand("CancelEncounter", parameters);
        }

    }
}
