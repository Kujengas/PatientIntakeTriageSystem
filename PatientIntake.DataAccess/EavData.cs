using PatientIntake.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;

namespace PatientIntake.DataAccess
{

    public class EavData
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
            var parameters = new List<SqlParameter>();

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

            return Database.ExecuteCommand("UpdateEncounter", parameters);

        }






        public static List<EncounterAttribute> GetAttributeValuesByEncounter(int id)
        {
            var lst = new List<EncounterAttribute>();
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@Id", id));
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
            return lst;
        }


        public static int InsertAttributeListList(List<IdAttributeDTO> attributeList)
        {
            try
            {
                DataTable table = new DataTable();
                table.Columns.Add("Id", typeof(int));
                table.Columns.Add("AttributeCode", typeof(string));
                table.Columns.Add("DataValue", typeof(string));


                foreach (IdAttributeDTO attr in attributeList)
                {
                    table.Rows.Add(
                       attr.Id,
                       attr.AttributeCode,
                       attr.Data
                       );
                }


                var parameters = new List<SqlParameter>();

                parameters.Add(new SqlParameter("@TVP", table));

                return Database.ExecuteCommand("usp_InsertAttributesForEncounter", parameters);

            }
            catch (Exception ex)
            {
                return -1;
            }
        }

    }
}
