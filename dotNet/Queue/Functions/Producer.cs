using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Queue
{
    public static class Producer
    {
        [FunctionName(nameof(Producer))]
        public static async Task<string> RunAsync(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequest req,
            [ServiceBus("my-queue", Connection = "SBConnectionString")]ICollector<string> queue,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function precessing a request.");

            var body = await new StreamReader(req.Body).ReadToEndAsync();
            var count = int.Parse(body);
            
            for (int i = 0; i < count; i++)
            {
                queue.Add(i.ToString());
            }

            return $"produced {count} messages";
        }
    }
}
