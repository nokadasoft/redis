using Microsoft.AspNetCore.Mvc;

namespace redis_core_back.Controllers
{
    [Route("api/[controller]")]
    public class RedisController : Controller
    {
        // GET api/redis
        [HttpGet]
        public string Get()
        {
            return "SOMETHING";
        }

        // PUT api/redis
        [HttpPut]
        public void Put()
        {
        }

        // DELETE api/redis
        [HttpDelete]
        public void Delete()
        {
        }
    }
}
