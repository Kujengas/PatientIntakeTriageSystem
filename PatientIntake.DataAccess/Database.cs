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
                DataSource = "",
                UserID = "",
                Password ="", 
                InitialCatalog = ""
            };

            return builder.ConnectionString;
        }

        public static DataTable GetDataTable(string commandName, List<SqlParameter> parameters)
        {
            DataTable dt = new DataTable();

            try
            {
                using (var conn = new SqlConnection(Database.GetConnectionString()))
                using (var cmd = new SqlCommand(commandName, conn) { CommandType = CommandType.StoredProcedure })
                {
                    conn.Open();

                    cmd.Parameters.AddRange(parameters.ToArray());
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(dt);
                }
            }
            catch (SqlException ex) 
            { 
            
            }

            return dt;
        }

        public static int ExecuteCommand(string commandName, List<SqlParameter> parameters)
        {
            int result = -1;
            try
            {
                using (var conn = new SqlConnection(Database.GetConnectionString()))
                using (var cmd = new SqlCommand(commandName, conn) { CommandType = CommandType.StoredProcedure })
                {
                    conn.Open();
                    cmd.Parameters.AddRange(parameters.ToArray());
                    result = cmd.ExecuteNonQuery();
                }
            }
            catch (SqlException ex)
            {

            }
            return result;
        }

    }
}
