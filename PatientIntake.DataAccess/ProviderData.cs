using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using PatientIntake.Model;

namespace PatientIntake.DataAccess
{
    public class ProviderData
    {

        public static int CreateProvider(Provider provider)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@FirstName", provider.FirstName?? String.Empty ));
            parameters.Add(new SqlParameter("@LastName", provider.LastName?? String.Empty ));
            parameters.Add(new SqlParameter("@MiddleName", provider.MiddleName?? String.Empty ));
            parameters.Add(new SqlParameter("@Suffix", provider.Suffix?? String.Empty ));
            parameters.Add(new SqlParameter("@Prefix", provider.Prefix?? String.Empty ));
            parameters.Add(new SqlParameter("@DateOfBirth", provider.DateOfBirth ));
            parameters.Add(new SqlParameter("@Phone", provider.Phone?? String.Empty ));
            parameters.Add(new SqlParameter("@Email", provider.Email?? String.Empty ));
            parameters.Add(new SqlParameter("@AddressLine1", provider.AddressLine1?? String.Empty ));
            parameters.Add(new SqlParameter("@AddressLine2", provider.AddressLine2?? String.Empty ));
            parameters.Add(new SqlParameter("@AddressCity", provider.AddressCity?? String.Empty ));
            parameters.Add(new SqlParameter("@AddressState", provider.AddressState?? String.Empty ));
            parameters.Add(new SqlParameter("@AddressPostalCode", provider.AddressPostalCode?? String.Empty ));
            parameters.Add(new SqlParameter("@OfficePhone", provider.OfficePhone?? String.Empty ));
            parameters.Add(new SqlParameter("@Fax", provider.Fax?? String.Empty ));
            parameters.Add(new SqlParameter("@License", provider.License?? String.Empty ));
            parameters.Add(new SqlParameter("@AreasOfPractice", provider.AreasOfPractice?? String.Empty ));

            return Database.ExecuteCommand("CreateProvider", parameters);

        }

        public static int UpdateProvider(Provider provider)
        {
            var parameters = new List<SqlParameter>();

            parameters.Add(new SqlParameter("@Id", provider.Id));
            parameters.Add(new SqlParameter("@FirstName", provider.FirstName));
            parameters.Add(new SqlParameter("@LastName", provider.LastName));
            parameters.Add(new SqlParameter("@MiddleName", provider.MiddleName));
            parameters.Add(new SqlParameter("@Suffix", provider.Suffix));
            parameters.Add(new SqlParameter("@Prefix", provider.Prefix));
            parameters.Add(new SqlParameter("@DateOfBirth", provider.DateOfBirth));
            parameters.Add(new SqlParameter("@Phone", provider.Phone));
            parameters.Add(new SqlParameter("@Email", provider.Email));
            parameters.Add(new SqlParameter("@AddressLine1", provider.AddressLine1));
            parameters.Add(new SqlParameter("@AddressLine2", provider.AddressLine2));
            parameters.Add(new SqlParameter("@AddressCity", provider.AddressCity));
            parameters.Add(new SqlParameter("@AddressState", provider.AddressState));
            parameters.Add(new SqlParameter("@AddressPostalCode", provider.AddressPostalCode));
            parameters.Add(new SqlParameter("@OfficePhone", provider.OfficePhone));
            parameters.Add(new SqlParameter("@Fax", provider.Fax));
            parameters.Add(new SqlParameter("@License", provider.License));
            parameters.Add(new SqlParameter("@AreasOfPractice", provider.AreasOfPractice));

            return Database.ExecuteCommand("UpdateProvider", parameters);

        }

        public static List<Provider> GetProviders()
        {
            var lst = new List<Provider>();
            var parameters = new List<SqlParameter>();
            DataTable dt = Database.GetDataTable("GetProviders", parameters);

            lst = (from DataRow row in dt.Rows
                   select new Provider
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
                       License = row["License"].ToString(),
                       AreasOfPractice = row["AreasOfPractice"].ToString(),

                       //CreatedDate = Convert.ToDateTime(row["CreationDate"]),

                   }).ToList();
            return lst;
        }

        public static Provider GetProvider(int id)
        {
            var parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("@Id", id));
            DataTable dt = Database.GetDataTable("GetProviderById", parameters);

            return (from DataRow row in dt.Rows
                    select new Provider
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
                        License = row["License"].ToString(),
                        AreasOfPractice = row["AreasOfPractice"].ToString(),

                        //CreatedDate = Convert.ToDateTime(row["CreationDate"]),
                    }).FirstOrDefault();
        }

    }
}
