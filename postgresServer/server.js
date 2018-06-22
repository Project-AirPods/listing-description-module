var pg = require('pg');

var conString = 'postgres://daryllin@localhost:5432/listing_module';

const Client = new pg.Client(conString);
Client.connect()

const copyOverview = "COPY 'listingsoverview.tble' FROM '../generatingData.js/tbleListingOverview.csv' DELIMITER CSV";

const query = Client.query(copyOverview, (err, results) => {
  if(err){
    console.log(err)
  }
  console.log('data sent to db');
});


Client.end();
