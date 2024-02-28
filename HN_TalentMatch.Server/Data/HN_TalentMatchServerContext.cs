using Microsoft.DotNet.MSIdentity.Shared;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;


namespace HN_TalentMatch.Server.Data
{
    public class HN_TalentMatchServerContext : DbContext
    {
        public HN_TalentMatchServerContext(DbContextOptions<HN_TalentMatchServerContext> options)
            : base(options)
        {
        }

        public DbSet<Vacancy> Vacancy { get; set; } = default!;
        public DbSet<Resume> Resume { get; set; } = default!;
        public DbSet<EducationItem> EducationItem { get; set; } = default!;
        public DbSet<ExperienceItem> ExperienceItem { get; set; } = default!;

    }
}
