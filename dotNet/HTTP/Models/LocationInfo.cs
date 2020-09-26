using System.Collections.Generic;

namespace HTTP.Models
{
    public class LocationInfo
    {
        public int geoname_id { get; set; } 
        public string capital { get; set; } 
        public List<LanguageInfo> languages { get; set; } 
        public string country_flag { get; set; } 
        public string country_flag_emoji { get; set; } 
        public string country_flag_emoji_unicode { get; set; } 
        public string calling_code { get; set; } 
        public bool is_eu { get; set; } 
    }
}