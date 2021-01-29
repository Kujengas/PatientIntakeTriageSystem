using PatientIntake.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace PatientIntake.DataAccess
{
   public class RoomData
    {
        public static int CreateRoom(Room room)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@LocationId", room.LocationId));
            parameters.Add(new SqlParameter("@Notes", room.Notes));
            parameters.Add(new SqlParameter("@RoomDescription", room.RoomDescription));
          
            return Database.ExecuteCommand("CreateRoom", parameters);

        }

        public static int UpdateRoom(Room room)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@Id", room.Id));
            parameters.Add(new SqlParameter("@LocationId", room.LocationId));
            parameters.Add(new SqlParameter("@Notes", room.Notes));
            parameters.Add(new SqlParameter("@RoomDescription", room.RoomDescription));

            return Database.ExecuteCommand("UpdateRoom", parameters);
        }

        public static List<Room> GetRooms()
        {
            var lst = new List<Room>();
            var parameters = new List<SqlParameter>();
            DataTable dt = Database.GetDataTable("GetRooms", parameters);

            lst = (from DataRow row in dt.Rows
                   select new Room
                   {
                       Id = Convert.ToInt32(row["Id"]),
                       LocationId = Convert.ToInt32(row["LocationId"]),
                       RoomDescription = row["RoomDescription"].ToString(),
                       Notes = row["Notes"].ToString()
                       //CreatedDate = Convert.ToDateTime(row["CreationDate"]),
                   }).ToList();
            return lst;
        }

        public static Room GetRoom(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@Id", id));
            DataTable dt = Database.GetDataTable("GetRoomById", parameters);

            return (from DataRow row in dt.Rows
                    select new Room
                    {
                        Id = Convert.ToInt32(row["Id"]),
                        LocationId = Convert.ToInt32(row["LocationId"]),
                        RoomDescription = row["RoomDescription"].ToString(),
                        Notes = row["Notes"].ToString()
                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),
                    }).FirstOrDefault();
        }
    }
}
