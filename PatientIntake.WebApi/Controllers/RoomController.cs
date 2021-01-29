using PatientIntake.DataAccess;
using PatientIntake.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PatientIntake.WebApi.Controllers
{
     public class RoomController : ApiController
    {

        // GET: api/Room
        public IEnumerable<Room> Get()
        {
            return RoomData.GetRooms();
        }

        // GET: api/Room/5
        public Room Get(int id)
        {
            return RoomData.GetRoom(id);
        }

        // POST: api/Room
        public void Post([FromBody] Room room)
        {
            RoomData.CreateRoom(room);
        }

        // PUT: api/Room
        public void Put([FromBody] Room room)
        {
            RoomData.UpdateRoom(room);
        }

        /*
        // DELETE: api/Room/5
        public void Delete([FromBody] Room room)
        {

        }
        */
    }
}
