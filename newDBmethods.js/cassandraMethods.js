//connect to cassandra here; define functions; export to server.js

const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'listing_moduleoptimize'});

