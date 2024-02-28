using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace HN_TalentMatch.Server
{
    [Table("AppResume")]
    public class Resume:Entity
    {
        [Required]
        public string uuid { get; set; }
        public string? first_name { get; set; }
        public string? last_name { get; set; }
        public string? birth_date { get; set; }
        public string? country { get; set; }
        public string? city { get; set; }
        public string? about { get; set; }
        public string? key_skills { get; set; }
        public List<ExperienceItem>? experienceItem { get; set; }
        public List<string>? languageItems { get; set; }
        public List<EducationItem>? educationItem { get; set; }
    }
}
