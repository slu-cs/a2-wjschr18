// Define a plan for collection

const mongoose = require('mongoose');

// Schema for a collection of voters

const Voter = new mongoose.Schema({
  first: String,
  last: String,
  zip: Number,
  history: [String]
});

Voter.index({first:1});
Voter.index({last:1});
Voter.index({zip:1});
Voter.index({history:1});

// Compile and export this Schema
module.exports = mongoose.model('Voter', Voter); // create model from schema
