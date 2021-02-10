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

        public virtual DbSet<ConfigurationConfiguration> ConfigurationConfiguration { get; set; }
        public virtual DbSet<EmailConfiguration> EmailConfiguration { get; set; }
        public virtual DbSet<EmailEmail> EmailEmail { get; set; }
        public virtual DbSet<EmailMessages> EmailMessages { get; set; }
        public virtual DbSet<EmailNotification> EmailNotification { get; set; }
        public virtual DbSet<FeedComment> FeedComment { get; set; }
        public virtual DbSet<FeedCommentLikes> FeedCommentLikes { get; set; }
        public virtual DbSet<FeedNotification> FeedNotification { get; set; }
        public virtual DbSet<FeedPost> FeedPost { get; set; }
        public virtual DbSet<FeedPostLikes> FeedPostLikes { get; set; }
        public virtual DbSet<LegalAcceptedTerms> LegalAcceptedTerms { get; set; }
        public virtual DbSet<LocationCountry> LocationCountry { get; set; }
        public virtual DbSet<LocationLocation> LocationLocation { get; set; }
        public virtual DbSet<LocationProvinceState> LocationProvinceState { get; set; }
        public virtual DbSet<MessageConversation> MessageConversation { get; set; }
        public virtual DbSet<MessageMessage> MessageMessage { get; set; }
        public virtual DbSet<PersonalEmail> PersonalEmail { get; set; }
        public virtual DbSet<PersonalFollowing> PersonalFollowing { get; set; }
        public virtual DbSet<PersonalLogin> PersonalLogin { get; set; }
        public virtual DbSet<PersonalPerson> PersonalPerson { get; set; }
        public virtual DbSet<PersonalProfilePicture> PersonalProfilePicture { get; set; }
        public virtual DbSet<PersonalRealtor> PersonalRealtor { get; set; }
        public virtual DbSet<PersonalReviews> PersonalReviews { get; set; }
        public virtual DbSet<SiteAssets> SiteAssets { get; set; }
        public virtual DbSet<SiteConfiguration> SiteConfiguration { get; set; }
        public virtual DbSet<SitePage> SitePage { get; set; }
        public virtual DbSet<SiteVisitsPersonal> SiteVisitsPersonal { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("TODO: Add ConnectionString");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ConfigurationConfiguration>(entity =>
            {
                entity.ToTable("Configuration_Configuration");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.ConfigurationName)
                    .IsRequired()
                    .HasColumnName("Configuration_Name");

                entity.Property(e => e.ConfigurationValue)
                    .IsRequired()
                    .HasColumnName("Configuration_Value");
            });

            modelBuilder.Entity<EmailConfiguration>(entity =>
            {
                entity.ToTable("Email_Configuration");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.Port).HasColumnType("int(11)");

                entity.Property(e => e.SmtpServer)
                    .IsRequired()
                    .HasColumnName("SMTP_Server");
            });

            modelBuilder.Entity<EmailEmail>(entity =>
            {
                entity.ToTable("Email_Email");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.ConfigurationId)
                    .HasColumnName("Configuration_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.Email).IsRequired();

                entity.Property(e => e.EmailType)
                    .IsRequired()
                    .HasColumnName("Email_Type");

                entity.Property(e => e.Password).IsRequired();
            });

            modelBuilder.Entity<EmailMessages>(entity =>
            {
                entity.ToTable("Email_Messages");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.EmailId)
                    .HasColumnName("Email_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.MessageName)
                    .IsRequired()
                    .HasColumnName("Message_Name");
            });

            modelBuilder.Entity<EmailNotification>(entity =>
            {
                entity.ToTable("Email_Notification");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.DateSent)
                    .HasColumnName("Date_Sent")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Email).IsRequired();

                entity.Property(e => e.ExceptionMessage).HasColumnName("Exception_Message");

                entity.Property(e => e.IsSent)
                    .HasColumnName("Is_Sent")
                    .HasColumnType("tinyint(1)");

                entity.Property(e => e.MessageId)
                    .HasColumnName("Message_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.PersonId)
                    .HasColumnName("Person_ID")
                    .HasColumnType("bigint(20)");
            });

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

            modelBuilder.Entity<FeedNotification>(entity =>
            {
                entity.ToTable("Feed_Notification");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.DatePosted)
                    .HasColumnName("Date_Posted")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.FromPersonId)
                    .HasColumnName("From_Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.IsRead)
                    .HasColumnName("Is_Read")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.NotificationType)
                    .IsRequired()
                    .HasColumnName("Notification_Type");

                entity.Property(e => e.SiteId)
                    .HasColumnName("Site_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ToPersonId)
                    .HasColumnName("To_Person_ID")
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

            modelBuilder.Entity<LegalAcceptedTerms>(entity =>
            {
                entity.ToTable("Legal_Accepted_Terms");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.CommentId)
                    .HasColumnName("Comment_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.DateAccepted)
                    .HasColumnName("Date_Accepted")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.DocumentName)
                    .IsRequired()
                    .HasColumnName("Document_Name");

                entity.Property(e => e.IsAccepted)
                    .HasColumnName("Is_Accepted")
                    .HasColumnType("tinyint(1)");

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

                entity.Property(e => e.Address1).HasColumnName("Address_1");

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

            modelBuilder.Entity<MessageConversation>(entity =>
            {
                entity.ToTable("Message_Conversation");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.OpeningDate)
                    .HasColumnName("Opening_Date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.OpeningPersonId)
                    .HasColumnName("Opening_Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.OtherPersonId)
                    .HasColumnName("Other_Person_ID")
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<MessageMessage>(entity =>
            {
                entity.ToTable("Message_Message");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.ConversationId)
                    .HasColumnName("Conversation_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.DatePosted)
                    .HasColumnName("Date_Posted")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
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

            modelBuilder.Entity<PersonalFollowing>(entity =>
            {
                entity.ToTable("Personal_Following");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.DateFollowed)
                    .HasColumnName("Date_Followed")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.FollowerId)
                    .HasColumnName("Follower_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.FollowingId)
                    .HasColumnName("Following_ID")
                    .HasColumnType("bigint(20)");
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

            modelBuilder.Entity<PersonalReviews>(entity =>
            {
                entity.ToTable("Personal_Reviews");

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

                entity.Property(e => e.Rating).HasColumnType("int(11)");

                entity.Property(e => e.RealtorId)
                    .HasColumnName("Realtor_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.ReviewMessage).HasColumnName("Review_Message");
            });

            modelBuilder.Entity<SiteAssets>(entity =>
            {
                entity.ToTable("Site_Assets");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.AssetName)
                    .IsRequired()
                    .HasColumnName("Asset_Name");

                entity.Property(e => e.AssetUrl)
                    .IsRequired()
                    .HasColumnName("Asset_URL");
            });

            modelBuilder.Entity<SiteConfiguration>(entity =>
            {
                entity.ToTable("Site_Configuration");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.BaseUrl)
                    .IsRequired()
                    .HasColumnName("Base_URL");

                entity.Property(e => e.Environment).IsRequired();
            });

            modelBuilder.Entity<SitePage>(entity =>
            {
                entity.ToTable("Site_Page");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.PageName)
                    .IsRequired()
                    .HasColumnName("Page_Name");

                entity.Property(e => e.PageUrl)
                    .IsRequired()
                    .HasColumnName("Page_URL");
            });

            modelBuilder.Entity<SiteVisitsPersonal>(entity =>
            {
                entity.ToTable("Site_Visits_Personal");

                entity.HasIndex(e => e.Id)
                    .HasName("ID")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("bigint(20) unsigned");

                entity.Property(e => e.DateVistited)
                    .HasColumnName("Date_Vistited")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.VisitedPersonId)
                    .HasColumnName("Visited_Person_ID")
                    .HasColumnType("bigint(20)");

                entity.Property(e => e.VisitingPersonId)
                    .HasColumnName("Visiting_Person_ID")
                    .HasColumnType("bigint(20)");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
