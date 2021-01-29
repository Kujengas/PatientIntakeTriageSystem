using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using PatientIntake.DataAccess;
using PatientIntake.Model;
using System;
using System.Diagnostics;
using System.Linq;
using System.IO;

namespace PatientIntake.DataAccess.Tests
{
    [TestClass]
    public class CreateOperationTests
    {
        [TestMethod]
        public void CreateRoomTest()
        {
            try
            {
                Trace.Write(" ");
                /*
                var x = RoomData.CreateRoom(
               new Room
               {
                   LocationId = 1,
                   RoomDescription = " Examination Room 1",
                   Notes = "Additional Comments"
                   
               });

                x = RoomData.CreateRoom(
               new Room
               {
                   LocationId = 1,
                   RoomDescription = "Examination Room 2",
                   Notes = "Additional Comments"
               });
                x = RoomData.CreateRoom(
               new Room
               {
                   LocationId = 2,
                   RoomDescription = "Tenaya Examination Room 1",
                   Notes = "Additional Comments"
               });
                x = RoomData.CreateRoom(
               new Room
               {
                   LocationId = 2,
                   RoomDescription = "Tenaya Examination Room 1",
                   Notes = "Additional Comments"
               });
                */
                Trace.Write("");
            }
            catch (Exception ex)
            {
                string output = $"Unable to create location: { ex.Message}";
                Trace.Write(output);
                Assert.Fail(output);
            }
        }

        [TestMethod]
        public void CreateLocationTest()
        {
            try
            {
                Trace.Write(" ");

                /*
                 
                var x = LocationData.CreateLocation(
                    new Location
                    {
                        LocationDescription = "Southwest Medical Associates",
                        AddressLine1 = "8526 Del Webb Blvd",
                        AddressLine2 = "",
                        AddressCity = "Las Vegas",
                        AddressState = "NV",
                        AddressPostalCode = "89134",
                        Notes = "",
                        OfficePhone = "702-877-5199",
                        Fax = "",
                        ReassignmentMessage = ""
                    });
               
                var x = LocationData.CreateLocation(
                   new Location
                   {
                       LocationDescription = "Southwest Medical Tenaya Urgent Care",
                       AddressLine1 = "2704 N Tenaya Way",
                       AddressLine2 = "",
                       AddressCity = "Las Vegas",
                       AddressState = "NV",
                       AddressPostalCode = "89128",
                       Notes = "",
                       OfficePhone = "702-877-5199",
                       Fax = "",
                       ReassignmentMessage = ""
                   });
 */
                Trace.Write("");
            }
            catch (Exception ex)
            {
                string output = $"Unable to create location: { ex.Message}";
                Trace.Write(output);
                Assert.Fail(output);
            }
        }

        [TestMethod]
        public void CreateTestUsers()
        {
            int startIndex = 0;
            int startinsertCount = 100;

            string text = System.IO.File.ReadAllText(@"C:\randomUserData.json");
            TestUsers users;
            users = TestUsers.FromJson(text);

            users.Results.GetRange(startIndex, startIndex + startinsertCount).ForEach(x =>
            {
                PatientData.CreatePatient(new Patient
                {
                    FirstName = x.Name.First,
                    LastName = x.Name.Last,
                    Phone = x.Phone,
                    DateOfBirth = x.Dob.Date.DateTime,
                    Gender = x.Gender.ToString(),
                    OfficePhone = x.Cell,
                    AddressLine1 = x.Location.Street.Number + " " + x.Location.Street.Name,
                    AddressCity = x.Location.City,
                    AddressState = x.Location.State,
                    AddressPostalCode = x.Location.Postcode.String,
                    Email = x.Email
                });
            });

        }

        [TestMethod]
        public void CreateTestProviders()
        {
            int startIndex = 120;
            int startinsertCount = 10;

            string text = System.IO.File.ReadAllText(@"C:\randomUserData.json");
            TestUsers users;
            users = TestUsers.FromJson(text);

            users.Results.GetRange(startIndex, startIndex + startinsertCount).ForEach(x =>
            {
                ProviderData.CreateProvider(new Provider
                {
                    FirstName = x.Name.First,
                    LastName = x.Name.Last,
                    Phone = x.Phone,
                    DateOfBirth = x.Dob.Date.DateTime,
                    OfficePhone = x.Cell,
                    AddressLine1 = x.Location.Street.Number + " " + x.Location.Street.Name,
                    AddressCity = x.Location.City,
                    AddressState = x.Location.State,
                    AddressPostalCode = x.Location.Postcode.String,
                    Email = x.Email,
                    Prefix = "Dr.",
                    Suffix = ", MD"
                });
            });

        }


        [TestMethod]
        public void CreateTestEncounters()
        {
            EncounterData.CreateEncounter(new Encounter
            {
                LocationId = 1,
                PatientId = 12,
                ProviderId = 4,
            });
            EncounterData.CreateEncounter(new Encounter
            {
                LocationId = 1,
                PatientId = 72,
                ProviderId = 6,
            });
            EncounterData.CreateEncounter(new Encounter
            {
                LocationId = 1,
                PatientId = 62,
                ProviderId = 8,
            });
            EncounterData.CreateEncounter(new Encounter
            {
                LocationId = 1,
                PatientId = 92,
                ProviderId = 10,

            });

            EncounterData.CreateEncounter(new Encounter
            {
                LocationId = 1,
                PatientId = 39,
                ProviderId = 2,
            });



        }

    }
}
