DROP TABLE IF EXISTS HouseRicher.Personal_Person;
DROP TABLE IF EXISTS HouseRicher.Personal_Email;
DROP TABLE IF EXISTS HouseRicher.Personal_Login;
DROP TABLE IF EXISTS HouseRicher.Personal_Realtor;
DROP TABLE IF EXISTS HouseRicher.Personal_Profile_Picture;
DROP TABLE IF EXISTS HouseRicher.Personal_Reviews;
DROP TABLE IF EXISTS HouseRicher.Personal_Following;

DROP TABLE IF EXISTS HouseRicher.Legal_Accepted_Terms;

DROP TABLE IF EXISTS HouseRicher.Message_Conversation;
DROP TABLE IF EXISTS HouseRicher.Message_Message;

DROP TABLE IF EXISTS HouseRicher.Location_Location;
DROP TABLE IF EXISTS HouseRicher.Location_Province_State;
DROP TABLE IF EXISTS HouseRicher.Location_Country;

DROP TABLE IF EXISTS HouseRicher.Site_Visits_Personal;

DROP TABLE IF EXISTS HouseRicher.Feed_Comment;
DROP TABLE IF EXISTS HouseRicher.Feed_Post;
DROP TABLE IF EXISTS HouseRicher.Feed_Comment_Likes;
DROP TABLE IF EXISTS HouseRicher.Feed_Post_Likes;
DROP TABLE IF EXISTS HouseRicher.Feed_Notification;

CREATE TABLE HouseRicher.Location_Country (
	ID SERIAL NOT NULL PRIMARY KEY,
	Full_Name TEXT NOT NULL,
	Short_Name TEXT,
	Code TEXT
);

CREATE TABLE HouseRicher.Location_Province_State (
	ID SERIAL NOT NULL PRIMARY KEY,
	Full_Name TEXT NOT NULL,
	Short_Name TEXT,
	Code TEXT,
	Country_ID BIGINT REFERENCES HouseRicher.Location_Country(ID)
);

CREATE TABLE HouseRicher.Location_Location (
	ID SERIAL NOT NULL PRIMARY KEY,
	Address_1 TEXT,
	Address_2 TEXT,
	Postal_Zip TEXT,
	City TEXT,
	Province_State_ID BIGINT REFERENCES HouseRicher.Location_Province_State(ID)
);

CREATE TABLE HouseRicher.Personal_Email (
	ID SERIAL NOT NULL PRIMARY KEY,
	Email TEXT NOT NULL,
	Activated BOOLEAN DEFAULT FALSE
);

CREATE TABLE HouseRicher.Personal_Login (
	ID SERIAL NOT NULL PRIMARY KEY,
	Username TEXT NOT NULL,
	Password TEXT NOT NULL,
	Last_Login DATETIME DEFAULT NULL,
	Is_Active BOOLEAN NULL
);

CREATE TABLE HouseRicher.Personal_Person (
	ID SERIAL NOT NULL PRIMARY KEY,
	First_Name TEXT NOT NULL,
	Last_Name TEXT NOT NULL,
	Description TEXT NOT NULL,
	Email_ID BIGINT REFERENCES HouseRicher.Personal_Email(ID),
	Login_ID BIGINT REFERENCES HouseRicher.Personal_Login(ID),
	Address_ID BIGINT REFERENCES HouseRicher.Location_Location(ID)
);

CREATE TABLE HouseRicher.Personal_Realtor (
	ID SERIAL NOT NULL PRIMARY KEY,
	Phone_Number_Office TEXT,
	Phone_Number_Cell TEXT,
	Website TEXT,
	Facebook TEXT,
	Linkedin TEXT,
	Twitter TEXT,
	Instagram TEXT,
	About TEXT,
	Brokerage TEXT,
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID)
);

CREATE TABLE HouseRicher.Personal_Profile_Picture (
	ID SERIAL NOT NULL PRIMARY KEY,
	Profile_Picture TEXT,
	File_Type TEXT,
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID)
);

CREATE TABLE HouseRicher.Personal_Reviews (
	ID SERIAL NOT NULL PRIMARY KEY,
	Review_Message TEXT,
	Rating INT,
	Person_ID BIGINT NOT NULL REFERENCES HouseRicher.Personal_Person(ID),
	Realtor_ID BIGINT NOT NULL REFERENCES HouseRicher.Personal_Realtor(ID),
	Date_Posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HouseRicher.Personal_Following (
	ID SERIAL NOT NULL PRIMARY KEY,
	Follower_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Following_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Date_Followed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HouseRicher.Legal_Accepted_Terms (
	ID SERIAL NOT NULL PRIMARY KEY,
	Document_Name TEXT NOT NULL,
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Post_ID BIGINT REFERENCES HouseRicher.Feed_Post(ID),
	Comment_ID BIGINT REFERENCES HouseRicher.Feed_Comment(ID),
	Is_Accepted BOOLEAN,
	Date_Accepted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HouseRicher.Message_Conversation (
	ID SERIAL NOT NULL PRIMARY KEY,
	Opening_Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Other_Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Opening_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HouseRicher.Message_Message (
	ID SERIAL NOT NULL PRIMARY KEY,
	Message TEXT,
	Conversation_ID BIGINT REFERENCES HouseRicher.Message_Conversation(ID),
	Date_Posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HouseRicher.Site_Visits_Personal (
	ID SERIAL NOT NULL PRIMARY KEY,
	Visited_Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Visiting_Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Date_Vistited TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HouseRicher.Feed_Post (
	ID SERIAL NOT NULL PRIMARY KEY,
	Subject TEXT,
    Message TEXT,
    Date_Posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID)
);

CREATE TABLE HouseRicher.Feed_Comment (
	ID SERIAL NOT NULL PRIMARY KEY,
    Message TEXT,
    Date_Posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Post_ID BIGINT REFERENCES HouseRicher.Feed_Post(ID),
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID)
);

CREATE TABLE HouseRicher.Feed_Post_Likes (
	ID SERIAL NOT NULL PRIMARY KEY,
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Post_ID BIGINT REFERENCES HouseRicher.Feed_Post(ID)
);

CREATE TABLE HouseRicher.Feed_Comment_Likes (
	ID SERIAL NOT NULL PRIMARY KEY,
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Comment_ID BIGINT REFERENCES HouseRicher.Feed_Comment(ID)
);

CREATE TABLE HouseRicher.Feed_Notification (
	ID SERIAL NOT NULL PRIMARY KEY,
	Notification_Type TEXT NOT NULL,
	To_Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	From_Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Is_Read BOOLEAN DEFAULT FALSE,
	Site_ID BIGINT,
	Date_Posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE HouseRicher.Email_Configuration;
DROP TABLE HouseRicher.Email_Email;
DROP TABLE HouseRicher.Email_Messages;
DROP TABLE HouseRicher.Email_Notification;

CREATE TABLE HouseRicher.Email_Configuration (
	ID SERIAL NOT NULL PRIMARY KEY,
	SMTP_Server TEXT NOT NULL,
	Port INT NOT NULL
);

CREATE TABLE HouseRicher.Email_Email (
	ID SERIAL NOT NULL PRIMARY KEY,
	Email_Type TEXT NOT NULL,
	Email TEXT NOT NULL,
	Password TEXT NOT NULL,
	Configuration_ID BIGINT REFERENCES HouseRicher.Email_Configuration(ID)
);

CREATE TABLE HouseRicher.Email_Messages (
	ID SERIAL NOT NULL PRIMARY KEY,
	Message_Name TEXT NOT NULL,
	Subject TEXT,
	Message TEXT,
	Email_ID BIGINT REFERENCES HouseRicher.Email_Email(ID)
);

CREATE TABLE HouseRicher.Email_Notification (
	ID SERIAL NOT NULL PRIMARY KEY,
	Email TEXT NOT NULL,
	Subject TEXT,
	Message TEXT,
	Is_Sent BOOLEAN NOT NULL,
	Exception_Message TEXT,
	Message_ID BIGINT REFERENCES HouseRicher.Email_Messages(ID),
	Person_ID BIGINT REFERENCES HouseRicher.Personal_Person(ID),
	Date_Sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE HouseRicher.Configuration_Configuration

CREATE TABLE HouseRicher.Configuration_Configuration (
	ID SERIAL NOT NULL PRIMARY KEY,
	Configuration_Name TEXT NOT NULL,
	Configuration_Value TEXT NOT NULL
);

DROP TABLE HouseRicher.Site_Configuration;
DROP TABLE HouseRicher.Site_Page;
DROP TABLE HouseRicher.Site_Assets;

CREATE TABLE HouseRicher.Site_Configuration (
	ID SERIAL NOT NULL PRIMARY KEY,
	Environment TEXT NOT NULL,
	Base_URL TEXT NOT NULL
);

CREATE TABLE HouseRicher.Site_Page (
	ID SERIAL NOT NULL PRIMARY KEY,
	Page_Name TEXT NOT NULL,
	Page_URL TEXT NOT NULL
);

CREATE TABLE HouseRicher.Site_Assets (
	ID SERIAL NOT NULL PRIMARY KEY,
	Asset_Name TEXT NOT NULL,
	Asset_URL TEXT NOT NULL
);

INSERT INTO HouseRicher.Site_Configuration (Environment, Base_URL)
	VALUES ('DEV', 'https://localhost:5001');
INSERT INTO HouseRicher.Site_Configuration (Environment, Base_URL)
	VALUES ('PROD', 'https://www.HouseRicher.com');
	
INSERT INTO HouseRicher.Site_Page (Page_Name, Page_URL)
	VALUES ('Password Reset', '/auth/password-reset/:token');
INSERT INTO HouseRicher.Site_Page (Page_Name, Page_URL)
	VALUES ('Unsubscribe', '/');
	
INSERT INTO HouseRicher.Site_Assets (Asset_Name, Asset_URL)
	VALUES ('HouseRicher Logo', '/assets/HouseRicher/HouseRicher Icon.png');
	
	
	
INSERT INTO HouseRicher.Email_Configuration (SMTP_Server, Port)
	VALUES ('smtp.live.com', 587);

INSERT INTO HouseRicher.Email_Email (Email_Type, Email, Password, Configuration_ID)
	VALUES ('Internal Notifications', 'luke_vanden_bosch@hotmail.com', 'on the sholders of giants2@', 1);
INSERT INTO HouseRicher.Email_Email (Email_Type, Email, Password, Configuration_ID)
	VALUES ('Marketing', 'luke_vanden_bosch@hotmail.com', 'on the sholders of giants2@', 1);
	
INSERT INTO HouseRicher.Email_Messages (Message_Name, Subject, Message, Email_ID)
	VALUES ('Contact Us', 'Contact Us', NULL, 1);
INSERT INTO HouseRicher.Email_Messages (Message_Name, Subject, Message, Email_ID)
	VALUES ('Forgot Password', 'HouseRicher Password Reset', '', 1);
	
	

INSERT INTO HouseRicher.Configuration_Configuration (Configuration_Name, Configuration_Value)
	VALUES ('JWT Secret Key', 'CWER24jk$@dINFS9252jcdnaskSSF01))@$');



INSERT INTO HouseRicher.Location_Country (Full_Name, Short_Name, Code)
	VALUES ('Canada', NULL, 'CA');
INSERT INTO HouseRicher.Location_Country (Full_Name, Short_Name, Code)
	VALUES ('Unites States of America', 'United States', 'US');

INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('British Columbia', NULL, 'BC', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Alberta', 'Alb', 'AB', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Saskachewan', NULL, 'SK', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Manitoba', NULL, 'MB', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Ontario', 'Ont', 'ON', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Quebec', NULL, 'QC', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('New Brunswick', NULL, 'NB', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Nova Scotia', NULL, 'NS', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Prince Edward Island', 'PEI', 'PE', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Newfoundland and Labrador', 'Newfoundland', 'NL', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Yukon', NULL, 'YT', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Northwest Territories', NULL, 'NT', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('Nunavut', NULL, 'NU', 1);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('New York', NULL, 'NY', 2);
INSERT INTO HouseRicher.Location_Province_State (Full_Name, Short_Name, Code, Country_ID)
	VALUES ('California', NULL, 'CA', 2);
	
INSERT INTO HouseRicher.Personal_Email(ID, Email, Activated)
	VALUES (1, 'anonymous', 1);
	
INSERT INTO HouseRicher.Personal_Login(ID, Username, Password, Is_Active)
	VALUES (1, 'anonymous', 'anonymous', 1);
	
INSERT INTO HouseRicher.Personal_Person(ID, First_Name, Last_Name, Description, Email_ID, Login_ID)
	VALUES (1, 'Anonymous', '', '', 1, 1);
	
INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('House Values', 'This is a test Post Please Take a look at this post. This is a longer post than normal. Please Look at this post', '2020-06-12 07:05', 1);

INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('Selling', 'This is a test Post 2', '2020-06-13 07:05', 1);

INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('Buying', 'fjkld sajfdjakfljd aklfjkl dajkfl djkalf jkdla jfkl jakfl jklasj fkld jkfl jklfjkldkj las f fdsadfdd ', '2020-06-12 07:05', 1);

INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('First Time Home Buyer', 'ffdsadf safdafdsafddafasf sajfdjakfljd aklfjkl dajkfl fffffffdsf sda sdla jfkl jakfl jklasj fkld jkfl jklfjkldkj las f fdsadfdd ','2020-06-13 07:05', 1);

INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('First Time Home Buyer', 'ffdsadf safdafdsafddafasf sajfdjakfljd aklfjkl dajkfl fffffffdsf sda sdla jfkl jakfl jklasj fkld jkfl jklfjkldkj las f fdsadfdd fds afd asf af safdsafdsadfdsa fasd fas ', '2020-06-12 07:05', 1);

INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('Buying', 'ffdsafdsafdfdsafdsa', '2020-06-13 05:05', 1);

INSERT INTO HouseRicher.Feed_Post (Subject, Message, Date_Posted, Person_ID)
	VALUES ('Buying', 'fdasdfd afdasfdasbtebtrbgfngfngafdfdsafdsa','2020-06-05 14:12', 1);
	
INSERT INTO HouseRicher.Feed_Comment (Message, Date_Posted, Post_ID, Person_ID)
	VALUES ('This is Comment 1', '2020-06-16 14:12', 2, 1);
	
INSERT INTO HouseRicher.Feed_Comment (Message, Date_Posted, Post_ID, Person_ID)
	VALUES ('This is Comment 2', '2020-06-16 14:12', 2, 2);
	
INSERT INTO HouseRicher.Feed_Comment (Message, Date_Posted, Post_ID, Person_ID)
	VALUES ('This is Comment 3', '2020-06-16 14:12', 6, 1);