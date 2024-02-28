using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace HN_TalentMatch.Server
{
    [Table("AppVacancy")]
    public class Vacancy : Entity
    {
        [Required]
        public string uuid { get; set; }
        public string? name { get; set; }
        public string? keywords { get; set; }
        public string? description { get; set; }
        public string? comment { get; set; }
    }
}
