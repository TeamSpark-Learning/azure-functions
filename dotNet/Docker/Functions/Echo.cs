using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;

namespace Docker
{
    public static class Echo
    {
        [FunctionName("Echo")]
        public static dynamic Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string text = req.Query["text"];
            return new {
                text = text,
                hostName = Environment.MachineName
            };
        }
    }
}
