using System;
using System.Threading;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

namespace azure_functions
{
    public static class Consumer
    {
        [FunctionName(nameof(Consumer))]
        public static void Run(
            [ServiceBusTrigger("my-queue", Connection = "SBConnectionString")]string myQueueItem,
            ILogger log)
        {
            // emulate workload
            Thread.Sleep(TimeSpan.FromSeconds(3));
            
            log.LogInformation($"C# ServiceBus queue trigger function processed message: {myQueueItem}");
        }
    }
}
