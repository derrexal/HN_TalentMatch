using Microsoft.EntityFrameworkCore;
using HN_TalentMatch.Server.Data;
using Newtonsoft.Json;


namespace HN_TalentMatch.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<HN_TalentMatchServerContext>(options =>
                options.UseNpgsql(builder.Configuration.GetConnectionString("HN_TalentMatchServerContext") ?? throw new InvalidOperationException("Connection string 'HN_TalentMatchServerContext' not found.")));
            // Add services to the container.
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            //Applying migrations to run programm
            using (var scope = app.Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<HN_TalentMatchServerContext>();
                context.Database.Migrate();
                SeedAsync(context);
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
        private static Task SeedAsync(HN_TalentMatchServerContext context)
        {
            if (!context.Vacancy.Any() && !context.Resume.Any())
            {
                var myJsonData = File.ReadAllText("case_2_reference_without_resume_sorted.json");
                var root = JsonConvert.DeserializeObject<Root>(myJsonData);

                context.Vacancy.AddRange(root.vacancy);
                context.Resume.AddRange(root.resumes);

                context.SaveChanges();
            }
            return Task.CompletedTask;
        }
    }
}
