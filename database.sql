-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


-- DROP TABLE IF EXISTS "user" CASCADE;
--
-- DROP TABLE IF EXISTS "user_details" CASCADE;
--
-- DROP TABLE IF EXISTS "posts" CASCADE;
--
-- DROP TABLE IF EXISTS "post_tags" CASCADE;
--
-- DROP TABLE IF EXISTS "tags" CASCADE;
-- 
-- DROP TABLE IF EXISTS "comments" CASCADE;
 
-- Create types for use in posts table to give us string values for set options in columns
CREATE TYPE SIZE AS ENUM ('small', 'medium', 'large');
CREATE TYPE STATUS AS ENUM ('pending', 'approved', 'delete');

 CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"is_admin" BOOLEAN
);


CREATE TABLE "user_details" (
	"id" SERIAL PRIMARY KEY,
	"email" VARCHAR (120) NOT NULL,
	"phone" INTEGER,
	"linkedIn" TEXT,
	"additional_info" TEXT
);


CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"host" VARCHAR(120) NOT NULL,
	"event_name" VARCHAR(120) NOT NULL,
	"cost" BOOLEAN,
	"time" VARCHAR(120),
	"description" TEXT NOT NULL,
	"event_size" SIZE,
	"image" VARCHAR(120) NOT NULL,
	"admin_approved" STATUS DEFAULT 'pending',
	"is_highlighted_event" BOOLEAN DEFAULT false,
	"contact_id" int REFERENCES "user_details",
	"remove_event" BOOLEAN DEFAULT false
);

    
--UPDATE "posts" 
--	SET
--	"remove_event"=true
--        
--    WHERE "id" = 1;

--UPDATE "posts" 
--	SET
--	"remove_event"=false
--        
--    WHERE "id" = 1;


CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tag_name" VARCHAR(40)
);

CREATE TABLE "post_tags" (
	"id" SERIAL PRIMARY KEY,
	"post_id" int REFERENCES "posts",
	"tag_id" int REFERENCES "tags"
);


CREATE TABLE "comments" (
"id" SERIAL PRIMARY KEY,
"comment" VARCHAR(1000),
"posts_id" int REFERENCES "posts"
);

 INSERT INTO "tags" ("tag_name")
 	VALUES
 	('Tech'),
 	('Women Only'),
 	('College'),
 	('Business'),
 	('Leadership');

	--Start dummy data for posts table
INSERT INTO "posts" (
	"host",
	"event_name",
	"cost",
	"time",
	"location",
	"description",
	"event_size",
	"image"
)
	VALUES (
	'prouty project', 
	'JAMMIN SESSIONS', 
	true, 
	'03/05/2024', 
	'Zoom',
	'Jammin’ Sessions are interactive sessions that are open to the public and held online the first Tuesday of each month (except for January, July, and September), from 8 – 9:30 a.m. via Zoom video conferencing. These interactive sessions feature keynote speakers and cover a range of topics that address virtually every aspect of business and life. Our Jammin’ topics draw in people of all ages— from 10-year-old children to 92-year-old grandparents—and from all walks of life. Everyone is encouraged to step outside their comfort zone and participate in energizing and thought-provoking discussions.

A $20 donation will be requested for each Jammin’ Session. All proceeds will be donated to the Prouty Project Stretch Fund of the Minneapolis Foundation.', 
	'medium', 
	'some image'
),(
	'Best Lunch Ever', 
	'Best Lunch Ever for Business Owners', 
	false, 
	'02/21/2024', 
	'tbd',
	'The Best Lunch Ever is highly vetted community of business owners who know what it’s like to go through what you are going through - in business and in life.

A group of people who are “my people”.

A space where the conversations are casual, confidential, & purposeful.

A place you can go & just be yourself.

To laugh. To talk. To do business. To do life. To be.

Hosted by Mick White of the 100 Year Manifesto', 
	'small', 
	'some image'
),(
	'Purpose Driven Coffee', 
	'Purpose Driven Coffee', 
	true, 
	'03/01/2024', 
	'The Gnome', 
	'void', 
	'small', 
	'some image'
),(
	'OLD NATIONAL', 
	'Good Leadership', 
	true, 
	'02/23/2024', 
	'Metropolitan Ballroom in Golden Valley', 
	'You will experience:

Listen in on a candid conversation between Rod Young and Paul Batz
Learn from Rod Young, CEO of Delta Dental
Contribute to research by participating in real-time, live audience surveys
Meet like-minded professionals who believe in the power of spreading goodness
Enjoy excellent live music by The Benny Weinbeck Trio and breakfast from D’Amico catering
Experience the opportunity to contribute to non-profits through The Bucket of Goodwill
Doors open at 7:15am, and the program begins at 7:45am and concludes around 9:15am at the Metropolitan Ballroom in Golden Valley, MN.', 
	'large', 
	'some image'
),(
	'Bob Martens', 
	'G7 Networking', 
	true, 
	'02/8/2024', 
	'150 American Blvd E. Bloomington, MN 55425', 
	'WHY G7 NETWORKING?
To exchange warm leads, finding new business relationships while growing in all areas of your life.
Imagine the potential impact a community of like-minded believers can have on your business!
Visit an existing Chapter or start one of your own! (limit 2 visits before joining)
ACT NOW! LIMIT: one business category member per G7 Chapter
SEVEN Gs of G7 NETWORKING:
Gospel: Short Devotional
Group: 30 second introductions
Grade: Metrics and recognition
God: Testimony / God-story from a member
Grow: Informative content focused on helping you grow
Get: What is your "get"?
Give: Who can you help via referral?', 
	'large', 
	'some image'
),(
	'Accelerated Global Connections', 
	'BUSINESS & BAGELS', 
	true, 
	'02/16/2024', 
	'France Place Building fifth floor', 
	'Looking for the perfect way to wrap up your week? Join us at Business & Bagels our Friday Morning Networking Mixer, where you will have the opportunity to meet new people, engage in meaningful conversations, and lay the foundation for future business connections.

Why Attend? Our Business & Bagels Friday Morning Mixer has quickly become a local favorite, drawing a diverse and dynamic crowd of professionals eager to expand their networks.

Networking Reinvented: We believe in the power of networking, and to enhance your experience, we have organized a special networking exercise that guarantees you will meet a maximum number of fellow attendees. Bring your business cards and be prepared to forge valuable connections with like-minded individuals from various industries.

Discover the Coffee Connection: Ever heard the saying that more business gets done over coffee than on Wall Street? Now is your chance to put it to the test. Enjoy complimentary coffee, water, and delicious bagels while you explore the possibilities of expanding your business horizons.

Event Details:
AGC Members: Attend FREE
Non-Members: $20 at the door
Parking: FREE parking available at the event location', 
	'large', 
	'some image'
),(
	'Twin Cities Collective', 
	'One Liner Storybrand Workshop', 
	true, 
	'02/21/2024', 
	'France Place Building fifth floor', 
	'Learn to clarify your message!', 
	'large', 
	'some image'
);