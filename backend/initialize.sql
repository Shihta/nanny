PRAGMA encoding = "UTF-8";
CREATE TABLE "nannies" (
"nanny_id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL,
"nannysystem_no" VARCHAR,
"name" VARCHAR,
"reg_num" VARCHAR,
"certificate" VARCHAR,
"nanny_num" VARCHAR,
"sex" VARCHAR,
"phones" VARCHAR,
"address" VARCHAR,
"age" VARCHAR,
"education" VARCHAR,
"object" VARCHAR,
"slot" VARCHAR,
"status" VARCHAR,
"training" VARCHAR
);
CREATE TABLE "districts" (
"name" VARCHAR,
"no" VARCHAR
);
CREATE TABLE "nannysystems" (
"district_no" VARCHAR,
"name" VARCHAR,
"no" VARCHAR
);