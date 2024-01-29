-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"is_admin" BOOLEAN
);

-- DROP TABLE IF EXISTS "user";

-- DROP TABLE IF EXISTS "user_details";

-- DROP TABLE IF EXISTS "posts";

-- DROP TABLE IF EXISTS "post_tags";

-- DROP TABLE IF EXISTS "tags";

CREATE TABLE "user_details" (
	"id" SERIAL PRIMARY KEY,
	"email" VARCHAR (120) NOT NULL,
	"phone" int,
	"additional_info" TEXT
);

CREATE TYPE SIZE AS ENUM ('small', 'medium', 'large');
CREATE TYPE STATUS AS ENUM ('pending', 'approved', 'delete');

CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"host" VARCHAR(120) NOT NULL,
	"event_name" VARCHAR(120) NOT NULL,
	"cost" BOOLEAN,
	"time" TIME,
	"description" TEXT NOT NULL,
	"event_size" SIZE,
	"image" VARCHAR(120) NOT NULL,
	"admin_approved" STATUS,
	"is_highlighted_event" BOOLEAN,
	"contact_id" int REFERENCES "user_details"
);

CREATE TABLE "post_tags" (
	"id" SERIAL PRIMARY KEY,
	"post_id" int REFERENCES "posts",
	"tag_id" int REFERENCES "tags"
);

CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tag_name" VARCHAR(40)
);

CREATE TABLE "comments" (
"id" SERIAL PRIMARY KEY,
"comment" VARCHAR(1000),
"posts_id" int REFERENCES "posts"
);
