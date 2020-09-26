using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net.Http;
using HTTP.Models;
using Microsoft.Extensions.Primitives;
using System.Linq;
using HTTP.Helpers;

namespace HTTP.Functions
{
    public static class Redirect
    {
        [FunctionName("Redirect")]
        public static async Task<IActionResult> RunAsync(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Redirecting to host");

            var ip = GetIpFromRequest(req);
            var ipInfo = await GetIpInfoAsync(ip);

            if (ipInfo.location != null)
            {
                return new RedirectResult(ipInfo.location.country_flag, false);
            }
            else
            {
                return new LocalRedirectResult("/api/Headers", false, true);
            }
        }

        public static string GetIpFromRequest(HttpRequest req)
        {
            StringValues ip;
            if (req.Headers.TryGetValue("X-Forwarded-For", out ip))
            {
                return ip.First().Split(':').First();
            }

            return "0.0.0.0";
        }

        public static async Task<IpInfo> GetIpInfoAsync(string ip)
        {
            var key = Helper.GetEnvironmentVariable("ipstack_key");
            var url = $"http://api.ipstack.com/{ip}?access_key={key}";

            string ipInfoRaw;
            using (var client = new HttpClient())
            {
                ipInfoRaw = await client.GetStringAsync(url);
            }

            IpInfo ipInfo;
            try
            {
                ipInfo = JsonConvert.DeserializeObject<IpInfo>(ipInfoRaw);
            }
            catch
            {
                ipInfo = new IpInfo();
            }

            return ipInfo;
        }
    }
}
