using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace PatientIntake.DataAccess
{
    class Database
    {

        public static string GetConnectionString()
        {
            SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder
            {
                DataSource = "sql5065.site4now.net",
                UserID = "DB_A4BBBD_SWUPDB_admin",
                Password = "swupdb1234",
                InitialCatalog = "DB_A4BBBD_SWUPDB"
            };

            return builder.ConnectionString;
        }

        public static DataTable GetDataTable(string commandName, List<SqlParameter> parameters)
        {
            DataTable dt = new DataTable();
            using (var conn = new SqlConnection(Database.GetConnectionString()))
            using (var cmd = new SqlCommand(commandName, conn) { CommandType = CommandType.StoredProcedure })
            {
                conn.Open();

                cmd.Parameters.AddRange(parameters.ToArray());
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);
            }

            return dt;
        }

        public static int ExecuteCommand(string commandName, List<SqlParameter> parameters)
        {
            int result;

            using (var conn = new SqlConnection(Database.GetConnectionString()))
            using (var cmd = new SqlCommand(commandName, conn) { CommandType = CommandType.StoredProcedure })
            {
                conn.Open();
                cmd.Parameters.AddRange(parameters.ToArray());
                result = cmd.ExecuteNonQuery();
            }
            return result;
        }

    }
}
