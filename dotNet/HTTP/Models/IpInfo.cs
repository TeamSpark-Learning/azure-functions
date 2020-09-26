namespace HTTP.Models
{
    public class IpInfo
    {
        public string ip { get; set; } 
        public string hostname { get; set; } 
        public string type { get; set; } 
        public string continent_code { get; set; } 
        public string continent_name { get; set; } 
        public string country_code { get; set; } 
        public string country_name { get; set; } 
        public string region_code { get; set; } 
        public string region_name { get; set; } 
        public string city { get; set; } 
        public string zip { get; set; } 
        public double latitude { get; set; } 
        public double longitude { get; set; } 
        public LocationInfo location { get; set; } 
        public TimeZoneInfo time_zone { get; set; } 
        public CurrencyInfo currency { get; set; } 
        public ConnectionInfo connection { get; set; } 
        public SecurityInfo security { get; set; } 
    }
}