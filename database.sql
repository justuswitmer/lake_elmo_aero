
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- Create a database named lake_elmo_aero
-- Create empty tables in the database

CREATE TABLE  "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (50) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    -- "auth_level" VARCHAR (50) NOT NULL
);

CREATE TABLE "price" (
	"id" SERIAL PRIMARY KEY,
	"type" VARCHAR (50) NOT NULL,
	"pricePerGal" MONEY NOT NULL 
);


CREATE TABLE "appointment" (
  "id" SERIAL PRIMARY KEY,
  "tail" VARCHAR (50) NOT NULL,
  "first" VARCHAR (50) NOT NULL,
  "last" VARCHAR (50) NOT NULL,
  "email" VARCHAR (50),
  "phone" VARCHAR (50),
  "appointment_date" TIMESTAMP NOT NULL,
  "hangar_access" VARCHAR (50),
  "hangar_num" VARCHAR (50),
  "additional_serv" VARCHAR (250),
  "fuel_qty" VARCHAR,
  "fuel_type" VARCHAR (50),
  "oil_qty" INT,
  "oil_type" VARCHAR (50),
  "additional_comm" VARCHAR (250),
  "service_type" VARCHAR NOT NULL,
  "created_date" TIMESTAMP NOT NULL,
  "completed_date" TIMESTAMP,
  "is_completed" BOOLEAN DEFAULT FALSE
);

-- Insert starter/test data into the tables

INSERT INTO "price" ("type", "pricePerGal")
VALUES
('100LL', '2.69'),
('Jet A', '3.75');

-- types of oil "Aero Shell 15W50" and "Philips 20W50"

INSERT INTO "appointment" 
    ("tail",
    "first",
    "last",
    "email",
    "phone",
    "appointment_date",
    "service_type",
    "hangar_access",
    "hangar_num",
    "additional_serv",
    "fuel_qty",
    "fuel_type",
    "oil_qty",
    "oil_type",
    "additional_comm",
    "created_date",
    "completed_date")
    VALUES
    ('3A2BC', 'John', 'Doe', 'JohnDoe@mail.com', '123-465-2237', '2020-11-19 13:30:00', 'Hangar', 'I will be there', 'E24', 'My plane is made of paper so be careful.', '0', '', 3, 'Aero Shell 15W50', 'Leave the oil in a bucket next to the plane.', '2020-11-03 10:00:00', '2020-11-05 13:30:00'),
    ('2B4N2B', 'Alexander', 'Carr', 'ACar@mail.com', '444-686-9254', '2020-11-20 15:00:00', 'Hangar', 'Unlocked', 'B40', 'Going to be towards the end of my slot, meeting with Prime.', 'Tabs', '100LL', 2, 'Philips 20W50', 'I run this place', '2020-11-04 15:00:00', '2020-11-16 15:00:00'),
    ('6N283', 'Bob', 'Barker', 'PriceMaster@mail.com', '543-756-1173', '2020-11-21 10:00:00', 'Hangar', 'Lake Elmo Aero has access', 'C21', 'Showcase number one', 'Full', 'Jet A', 5, 'Philips 20W50', 'Betting one cent is a cop out', '2020-11-04 12:00:00', '2020-12-18 10:00:00'),
    ('1313C', 'Sean', 'McLaughlin', 'Jackyboy@mail.com', '312-548-9921', '2020-11-22 8:30:00', 'Runway', '', '', 'The plane is green', '13gal', 'Jet A', 0, '', 'Be there at the top of the morning', '2020-11-14 10:00:00', '2020-11-28 8:30:00'),
    ('666JC', 'Fern', 'Brenny', 'meow@mail.com', '666-911-1313', '2020-12-06 12:00:00', 'Runway', '', '', 'Meow meow meow meow meow meow meow...', 'Tabs', '100LL', 0, '', 'Tuna and Treats plz', '2020-11-22 16:13:00', '2020-12-06 12:00:00'),
    ('LL462', 'Lieutenant', 'Spock', 'Illogical@mail.com', '549-772-9266', '2020-12-13 10:30:00', 'Hangar', 'Lake Elmo Aero has access', 'D15', 'Live long and prosper', '', '', 1, 'Philips 20W50', 'Mind meld if possible', '2020-11-28 14:45:00', '2020-12-13 10:30:00'),
    ('123ABC', 'Bird', 'Big', 'BigYellow@mail.com', '123-456-7890', '2021-01-22 09:00:00', 'Runway', '', '', 'Will be flying in for bird seed', 'Full', '100LL', 5, 'Aero Shell 15W50', 'Lalalala', '2020-12-27 10:32:00', '2021-01-22 09:00:00'),
    ('M3PM3P', 'Road', 'Runner', 'Meepmeep@mail.com', '333-444-9898', '2021-01-14 12:00:00', 'Runway', '', '', 'Mind the painted wall', '25gal', '100LL', 0, '', 'Acme Inc.', '2020-01-02 8:11:00', '2021-01-09 12:00:00'),
    ('122KS', 'Shmedan', 'Wartz', 'Smarties@mail.com', '897-234-4210', '2021-01-14 13:30:00', 'Hangar', 'I will be there', 'E30', 'Bring smarties please', '14gal', '100LL', 0, '', 'Candy corn for extra credit', '2020-01-03 10:00:00', '2021-01-04 13:30:00'),
    ('2E2EBD', 'Tweety', 'Bird', 'SmolBirb@mail.com', '234-123-3568', '2021-01-14 11:30:00', 'Hangar', 'Unlocked', 'A10', 'I taught I taw a putty tat', 'Tabs', '100LL', 0, '', 'I did! I did taw a putty tat', '2020-01-03 10:15:00', '2021-01-14 11:30:00');