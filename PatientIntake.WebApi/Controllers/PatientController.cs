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
    public class PatientController : ApiController
    {

        // GET: api/Patient
        public IEnumerable<Patient> Get()
        {
            return PatientData.GetPatients();
        }

        // GET: api/Patient/5
        public Patient Get(int id)
        {
            return PatientData.GetPatient(id);
        }

        // POST: api/Patient
        public void Post([FromBody] Patient patient)
        {
            PatientData.CreatePatient(patient);
        }

        // PUT: api/Patient
        public void Put([FromBody] Patient patient)
        {
            PatientData.UpdatePatient(patient);
        }

        /*
        // DELETE: api/Patient/5
        public void Delete([FromBody] Patient patient)
        {

        }
        */
    }
}
