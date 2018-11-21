using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace redis_core_back
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args, Environment.GetEnvironmentVariable("PORT")).Run();
        }

        public static IWebHost BuildWebHost(string[] args, string port) =>
            WebHost.CreateDefaultBuilder(args)
                .UseKestrel()
                .UseStartup<Startup>()
                .UseUrls($"http://0.0.0.0:{port}")
                .Build();
    }
}

