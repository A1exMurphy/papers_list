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


INSERT INTO "posts" (
	"host",
	"event_name",
	"cost",
	"time",
	"description",
	"event_size",
	"image"
)
	VALUES (
	'Prime', 
	'client project', 
	false, 
	'14:13', 
	'we are almost real developers!', 
	'small', 
	'some image'
);

UPDATE "posts" 
	SET
	"host"='PDA',
	"event_name"='final project',
	"cost"=true,
	"time"='0216',
	"description"='5 months of work!',
	"event_size"='large',
	"image"='green swirly'
        
    WHERE "id" = 1;
    
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