using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace HN_TalentMatch.Server
{
    [Table("AppEducationItem")]
    public class EducationItem : Entity
    {
        public int ResumeId { get; set; }
        public int? year { get; set; }
        public string? organization { get; set; }
        public string? faculty { get; set; }
        public string? specialty { get; set; }
        public string? result { get; set; }
        public string? education_type { get; set; }
        public string? education_level { get; set; }
    }
}
