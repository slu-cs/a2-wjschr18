// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db'); // connects to the database
const Voter = require('./schema');

connect();

// What documents are in the collection?
const query = Voter.find();
query.exec(function(error, voters){
  if (error) console.error(error.stack);
  console.log(voters);
});
