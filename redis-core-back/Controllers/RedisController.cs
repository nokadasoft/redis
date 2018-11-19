using System;
using Microsoft.AspNetCore.Mvc;
using ServiceStack.Redis;

namespace redis_core_back.Controllers
{
    [Route("api/[controller]")]
    public class RedisController : Controller
    {
        //https://docs.servicestack.net/netcore-redis
        private string RedisUrl 
        { 
            get
            {
                var redisUrl = Environment.GetEnvironmentVariable("REDIS_URL");
                return redisUrl == null? "localhost:6379": redisUrl;
            }
        }
        // GET api/redis
        [HttpGet]
        public string Get()
        {            
            var url = RedisUrl;
            using (var client = GetRedisManager(url).GetClient())
            {
                var value = client.Get<string>("someString");
                Console.WriteLine($"redisClient.get [{value}] ({url})");
                return value;
            }
        }

        // PUT api/redis
        [HttpPut]
        public void Put()
        {
            var url = RedisUrl;
            using (var client = GetRedisManager(url).GetClient())
            {
                client.Increment("someString", 1);
                Console.WriteLine($"redisClient.incr [+1] ({url})");
            }
        }

        // DELETE api/redis
        [HttpDelete]
        public void Delete()
        {
            var url = RedisUrl;
            using (var client = GetRedisManager(url).GetClient())
            {
                client.Set("someString", 0);
                Console.WriteLine($"redisClient.set [0] ({url})");
            }
        }

        private RedisManagerPool GetRedisManager(string url)
        {
            return new RedisManagerPool(url);
        }

    }
}
