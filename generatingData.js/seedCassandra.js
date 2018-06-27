CREATE KEYSPACE listing_module WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 2};

USE listing_module;



CREATE TABLE listingoverviewtble(
  id INT,
  summary text,
  space text,
  access text,
  interactions text,
  tonote text,
  interest1 text,
  interest2 text,
  interest3 text,
  rules text,
  allowedguests INT,
  beds INT,
  bedrooms INT,
  baths INT,
  PRIMARY KEY(id)
);



CREATE TABLE refamenitiestble(
  id int,
  category text,
  subcategory text,
  comments text,
  PRIMARY KEY (id)
);



CREATE TABLE amenitiestble(
  id int,
  listingid int,
  pictogramid int,
  category text,
  subcategory text,
  comments text,
  PRIMARY KEY (id)
);



CREATE TABLE pictogramstble(
  id int,
  imgname text,
  imgdata text,
  PRIMARY KEY (id)
);



CREATE TABLE sleepingarrangementstble(
  id int,
  listingid int,
  roomname text,
  noofbeds int,
  PRIMARY KEY (id)
);

COPY listingoverviewtble (id, summary, space, access, interactions, tonote, interest1, interest2, interest3, rules, allowedguests, beds, bedrooms, baths) FROM 'tbleListingOverview.csv' WITH DELIMITER =',';
COPY refamenitiestble (id, category, subcategory, comments) FROM 'refamenities.csv' WITH DELIMITER =',';
COPY amenitiestble (id, listingid, pictogramid, category, subcategory, comments) FROM 'tbleAmenities.csv' WITH DELIMITER =',';
COPY pictogramstble (id, imgname, imgdata) FROM 'tblePictograms.csv' WITH DELIMITER =',';
COPY sleepingarrangementstble (id, listingid, roomname, noofbeds) FROM 'tbleSleepingArrangements.csv' WITH DELIMITER =',';

