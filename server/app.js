const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const newrelic = require('newrelic');
const db = require('../database/index.js');
// have the different db (cassandra/ postgres) methods here; then have options for each

const app = express();

app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/listings/:id', express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/listings/:listingId/overview', (req, res) => {
  db.getListingOverview(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  db.getSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(results);
    }
  });
});

module.exports = app;
