using System;
using Microsoft.AspNetCore.Mvc;
using ServiceStack.Redis;

namespace redis_core_back.Controllers
{
    [Route("api/[controller]")]
    public class RedisController : Controller
    {
        //https://docs.servicestack.net/netcore-redis
        private RedisManagerPool _redisManager = null;
        private RedisManagerPool redisManager {
            get 
            {
                if (_redisManager == null){
                    var redisUrl = Environment.GetEnvironmentVariable("REDIS_URL");
                    //var port = Environment.GetEnvironmentVariable("PORT");

                    var url = redisUrl == null? "localhost:6379": redisUrl;
                    Console.WriteLine("Redis endpoint: "+url);
                    try{
                        _redisManager = new RedisManagerPool(url);
                    }
                    catch(Exception ex){
                        Console.WriteLine(ex.ToString());
                    }
                }

                return _redisManager;
            }
        }
        
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
