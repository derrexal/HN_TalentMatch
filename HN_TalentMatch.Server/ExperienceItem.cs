using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace HN_TalentMatch.Server
{
    [Table("AppExperienceItem")]

    public class ExperienceItem : Entity
    {
        public int ResumeId { get; set; }
        public string? starts { get; set; }
        public string? ends { get; set; }
        public string? employer { get; set; }
        public string? city { get; set; }
        public string? position { get; set; }
        public string? description { get; set; }

    }
}
