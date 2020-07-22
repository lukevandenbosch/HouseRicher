using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HouseRicherCore.Model
{
    public partial class HouseRicherContext : DbContext
    {
        public HouseRicherContext()
        {
        }

        public HouseRicherContext(DbContextOptions<HouseRicherContext> options)
            : base(options)
        {
        }

        public virtual DbSet<FeedComment> FeedComment { get; set; }
        public virtual DbSet<FeedCommentLikes> FeedCommentLikes { get; set; }
        public virtual DbSet<FeedPost> FeedPost { get; set; }
        public virtual DbSet<FeedPostLikes> FeedPostLikes { get; set; }
        public virtual DbSet<LocationCountry> LocationCountry { get; set; }
        public virtual DbSet<LocationLocation> LocationLocation { get; set; }
        public virtual DbSet<LocationProvinceState> LocationProvinceState { get; set; }
        public virtual DbSet<PersonalEmail> PersonalEmail { get; set; }
        public virtual DbSet<PersonalLogin> PersonalLogin { get; set; }
        public virtual DbSet<PersonalPerson> PersonalPerson { get; set; }
        public virtual DbSet<PersonalProfilePicture> PersonalProfilePicture { get; set; }
        public virtual DbSet<PersonalRealtor> PersonalRealtor { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=housericher.cphwljnrxhx4.us-east-2.rds.amazonaws.com;port=3306;user=HomeTownValue;password=CX83257ZYtML9KK4;database=HouseRicher");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FeedComment>(entity =>
            {
                entity.ToTable("Feed_Comment");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.DatePosted)
                    .HasColumnName("Date_Posted")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PostId)
                    .HasColumnName("Post_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<FeedCommentLikes>(entity =>
            {
                entity.ToTable("Feed_Comment_Likes");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.CommentId)
                    .HasColumnName("Comment_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<FeedPost>(entity =>
            {
                entity.ToTable("Feed_Post");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.DatePosted)
                    .HasColumnName("Date_Posted")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<FeedPostLikes>(entity =>
            {
                entity.ToTable("Feed_Post_Likes");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PostId)
                    .HasColumnName("Post_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<LocationCountry>(entity =>
            {
                entity.ToTable("Location_Country");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnName("Full_Name");

                entity.Property(e => e.ShortName).HasColumnName("Short_Name");
            });

            modelBuilder.Entity<LocationLocation>(entity =>
            {
                entity.ToTable("Location_Location");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.Address1)
                    .IsRequired()
                    .HasColumnName("Address_1");

                entity.Property(e => e.Address2).HasColumnName("Address_2");

                entity.Property(e => e.PostalZip).HasColumnName("Postal_Zip");

                entity.Property(e => e.ProvinceStateId)
                    .HasColumnName("Province_State_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<LocationProvinceState>(entity =>
            {
                entity.ToTable("Location_Province_State");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.CountryId)
                    .HasColumnName("Country_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnName("Full_Name");

                entity.Property(e => e.ShortName).HasColumnName("Short_Name");
            });

            modelBuilder.Entity<PersonalEmail>(entity =>
            {
                entity.ToTable("Personal_Email");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.Activated)
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.Email).IsRequired();
            });

            modelBuilder.Entity<PersonalLogin>(entity =>
            {
                entity.ToTable("Personal_Login");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.IsActive)
                    .HasColumnName("Is_Active")
                    .HasColumnType("tinyint(1)");

                entity.Property(e => e.LastLogin).HasColumnName("Last_Login");

                entity.Property(e => e.Password).IsRequired();

                entity.Property(e => e.Username).IsRequired();
            });

            modelBuilder.Entity<PersonalPerson>(entity =>
            {
                entity.ToTable("Personal_Person");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.AddressId)
                    .HasColumnName("Address_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.EmailId)
                    .HasColumnName("Email_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("First_Name");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("Last_Name");

                entity.Property(e => e.LoginId)
                    .HasColumnName("Login_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<PersonalProfilePicture>(entity =>
            {
                entity.ToTable("Personal_Profile_Picture");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.FileType).HasColumnName("File_Type");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ProfilePicture).HasColumnName("Profile_Picture");
            });

            modelBuilder.Entity<PersonalRealtor>(entity =>
            {
                entity.ToTable("Personal_Realtor");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PhoneNumberCell).HasColumnName("Phone_Number_Cell");

                entity.Property(e => e.PhoneNumberOffice).HasColumnName("Phone_Number_Office");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
