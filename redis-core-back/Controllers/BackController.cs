using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace redis_core_back.Controllers
{
    [Route("api/[controller]")]
    public class BackController : Controller
    {
        //https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/console-webapiclient
        private static readonly HttpClient client = new HttpClient();

        // GET api/redis
        [HttpGet]
        public string Get()
        {
            //client.DefaultRequestHeaders.Accept.Clear();
            //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            //client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            var results = client.GetStringAsync("http://localhost:3001/redisGet").GetAwaiter();
            return results.GetResult().ToString();
        }
    }
}
