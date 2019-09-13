using System;
using System.Threading;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;

namespace azure_functions
{
    public static class QueueMessageProcessor
    {
        [FunctionName("QueueMessageProcessor")]
        public static void Run(
            [ServiceBusTrigger("lab01", Connection = "SBConnectionString")]string myQueueItem,
            ILogger log)
        {
            Thread.Sleep(TimeSpan.FromSeconds(3));
            
            log.LogInformation($"C# ServiceBus queue trigger function processed message: {myQueueItem}");
        }
    }
}
