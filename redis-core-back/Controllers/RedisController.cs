using Microsoft.AspNetCore.Mvc;
using ServiceStack.Redis;

namespace redis_core_back.Controllers
{
    [Route("api/[controller]")]
    public class RedisController : Controller
    {
        //https://docs.servicestack.net/netcore-redis
        private RedisManagerPool redisManager = new RedisManagerPool("localhost:6379");
        
        // GET api/redis
        [HttpGet]
        public string Get()
        {            
            using (var client = redisManager.GetClient())
            {
                var value = client.Get<string>("someString");
                return value;
            }
        }

        // PUT api/redis
        [HttpPut]
        public void Put()
        {
            using (var client = redisManager.GetClient())
            {
                client.Increment("someString", 1);
            }
        }

        // DELETE api/redis
        [HttpDelete]
        public void Delete()
        {
            using (var client = redisManager.GetClient())
            {
                client.Set("someString", 0);
            }
        }
    }
}
