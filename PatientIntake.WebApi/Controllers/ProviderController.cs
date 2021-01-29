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
     public class ProviderController : ApiController
    {

        // GET: api/Provider
        public IEnumerable<Provider> Get()
        {
            return ProviderData.GetProviders();
        }

        // GET: api/Provider/5
        public Provider Get(int id)
        {
            return ProviderData.GetProvider(id);
        }

        // POST: api/Provider
        public void Post([FromBody] Provider provider)
        {
            ProviderData.CreateProvider(provider);
        }

        // PUT: api/Provider
        public void Put([FromBody] Provider provider)
        {
            ProviderData.UpdateProvider(provider);
        }

        /*
        // DELETE: api/Provider/5
        public void Delete([FromBody] Provider provider)
        {

        }
        */
    }
}
