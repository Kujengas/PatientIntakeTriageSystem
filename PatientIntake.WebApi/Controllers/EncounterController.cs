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
    public class EncounterController : ApiController
    {

        // GET: api/Encounter
        public IEnumerable<Encounter> Get()
        {
            return EncounterData.GetEncounters();
        }

        // GET: api/Encounter/5
        public Encounter Get(int id)
        {
            return EncounterData.GetEncounter(id);
        }

        // GET: api/Encounter/Attributes/5
        [Route("api/Encounter/Attributes/{id}")]
        [HttpGet]
        public List<EncounterAttribute> GetAtributes(int id)
        {
            return EncounterData.GetAttributeValuesByEncounter(id);
        }


        // GET: api/Encounter/Attributes/5
        [Route("api/Encounter/AttributeFields/")]
        [HttpGet]
        public List<AttributeField> GetAtributesFields()
        {
            return EncounterData.GetAttributeList();
        }


        // POST: api/Encounter/Attributes
        [Route("api/Encounter/Attributes/")]
        [HttpPost]
        public void PostAttributesValues([FromBody] List<IdAttributeDTO> attributes)
        {
            EncounterData.InsertAttributeList(attributes);
        }

        // POST: api/Encounter
        public void Post([FromBody] Encounter encounter)
        {
            EncounterData.CreateEncounter(encounter);
        }

        // PUT: api/Encounter
        public void Put([FromBody] Encounter encounter)
        {
            EncounterData.UpdateEncounter(encounter);
        }

        /*
        // DELETE: api/Encounter/5
        public void Delete([FromBody] Encounter encounter)
        {

        }
        */
    }
}
