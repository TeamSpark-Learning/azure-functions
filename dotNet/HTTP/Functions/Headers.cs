using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Text;

namespace HTTP.Functions
{
    public static class Headers
    {
        [FunctionName("Headers")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Showing HTTP headers for request");

            var st = new StringBuilder();
            st.Append("<table>");
            st.Append("<tr><th>Header</th><th>Value</th></tr>");
            foreach (var header in req.Headers)
            {
                st.Append("<tr>");
                st.AppendFormat("<td>{0}<td>", header.Key);
                st.AppendFormat("<td>{0}<td>", header.Value);
                st.Append("</tr>");
            }
            st.Append("</table>");

            return new ContentResult
            {
                Content = st.ToString(),
                ContentType = "text/html"
            };
        }
    }
}
