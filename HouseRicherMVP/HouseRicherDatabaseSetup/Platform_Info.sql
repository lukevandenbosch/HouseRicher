DROP TABLE IF EXISTS Feed.Post;


CREATE TABLE Feed.Post (
	ID SERIAL PRIMARY KEY,
    Message TEXT,
	Likes INTEGER DEFAULT NULL,
    Date_Posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Person_ID BIGINT REFERENCES Personal.Person(ID)
);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('This is a test Post Please Take a look at this post. This is a longer post than normal. Please Look at this post', 2, '2020-06-12 07:05', 1);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('This is a test Post 2', 5, '2020-06-13 07:05', 1);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('fjkld sajfdjakfljd aklfjkl dajkfl djkalf jkdla jfkl jakfl jklasj fkld jkfl jklfjkldkj las f fdsadfdd ', 4, '2020-06-12 07:05', 1);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('ffdsadf safdafdsafddafasf sajfdjakfljd aklfjkl dajkfl fffffffdsf sda sdla jfkl jakfl jklasj fkld jkfl jklfjkldkj las f fdsadfdd ', 0, '2020-06-13 07:05', 2);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('ffdsadf safdafdsafddafasf sajfdjakfljd aklfjkl dajkfl fffffffdsf sda sdla jfkl jakfl jklasj fkld jkfl jklfjkldkj las f fdsadfdd fds afd asf af safdsafdsadfdsa fasd fas ', 0, '2020-06-12 07:05', 2);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('ffdsafdsafdfdsafdsa', 0, '2020-06-13 05:05', 2);

INSERT INTO Feed.Post (Message, Likes, Date_Posted, Person_ID)
VALUES ('fdasdfd afdasfdasbtebtrbgfngfngafdfdsafdsa', 4, '2020-06-05 14:12', 2);