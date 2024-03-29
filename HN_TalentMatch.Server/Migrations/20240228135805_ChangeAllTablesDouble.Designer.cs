﻿// <auto-generated />
using System;
using System.Collections.Generic;
using HN_TalentMatch.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HN_TalentMatch.Server.Migrations
{
    [DbContext(typeof(HN_TalentMatchServerContext))]
    [Migration("20240228135805_ChangeAllTablesDouble")]
    partial class ChangeAllTablesDouble
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("HN_TalentMatch.Server.EducationItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ResumeId")
                        .HasColumnType("integer");

                    b.Property<string>("education_level")
                        .HasColumnType("text");

                    b.Property<string>("education_type")
                        .HasColumnType("text");

                    b.Property<string>("faculty")
                        .HasColumnType("text");

                    b.Property<string>("organization")
                        .HasColumnType("text");

                    b.Property<string>("result")
                        .HasColumnType("text");

                    b.Property<string>("specialty")
                        .HasColumnType("text");

                    b.Property<int?>("year")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ResumeId");

                    b.ToTable("AppEducationItem");
                });

            modelBuilder.Entity("HN_TalentMatch.Server.ExperienceItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ResumeId")
                        .HasColumnType("integer");

                    b.Property<string>("city")
                        .HasColumnType("text");

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<string>("employer")
                        .HasColumnType("text");

                    b.Property<string>("ends")
                        .HasColumnType("text");

                    b.Property<string>("position")
                        .HasColumnType("text");

                    b.Property<string>("starts")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ResumeId");

                    b.ToTable("AppExperienceItem");
                });

            modelBuilder.Entity("HN_TalentMatch.Server.Resume", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("about")
                        .HasColumnType("text");

                    b.Property<string>("birth_date")
                        .HasColumnType("text");

                    b.Property<string>("city")
                        .HasColumnType("text");

                    b.Property<string>("country")
                        .HasColumnType("text");

                    b.Property<string>("first_name")
                        .HasColumnType("text");

                    b.Property<string>("key_skills")
                        .HasColumnType("text");

                    b.Property<List<string>>("languageItems")
                        .HasColumnType("text[]");

                    b.Property<string>("last_name")
                        .HasColumnType("text");

                    b.Property<string>("uuid")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("AppResume");
                });

            modelBuilder.Entity("HN_TalentMatch.Server.Vacancy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("comment")
                        .HasColumnType("text");

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<string>("keywords")
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<string>("uuid")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("AppVacancy");
                });

            modelBuilder.Entity("HN_TalentMatch.Server.EducationItem", b =>
                {
                    b.HasOne("HN_TalentMatch.Server.Resume", null)
                        .WithMany("educationItem")
                        .HasForeignKey("ResumeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HN_TalentMatch.Server.ExperienceItem", b =>
                {
                    b.HasOne("HN_TalentMatch.Server.Resume", null)
                        .WithMany("experienceItem")
                        .HasForeignKey("ResumeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HN_TalentMatch.Server.Resume", b =>
                {
                    b.Navigation("educationItem");

                    b.Navigation("experienceItem");
                });
#pragma warning restore 612, 618
        }
    }
}
