// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db'); // connects to the database
const Voter = require('./schema');
const voters = require('./voters.csv')

connect();

// create voters
  // parse csv
let data = [];
let voterArray = [];
  function getVoterInfo(voterInfo){
    const lines = voterInfo.split(/\r\n|\n/);

    // convert from csv to an array of strings, indexed by line
    for (let i = 0; i < lines.length; i++){
      data[i] = lines[i].split(',');
    }
    // convert each line into a voter model
    for (let i = 0; i < data.length; i++){
      let currentLine = data[i];
      voterArray[i] = new Voter({
        first: currentLine[0],
        last: currentLine[1],
        zip: currentLine[2],
        history: currentLine[3]
      });

      // Delete any previous data in this collection (inside is after the database is dropped)
      mongoose.connection.dropDatabase(function(){
        for (let k = 0; k < voterArray.length; k++){ // need a promise here I think
          voterArray[k].save(function(){
            if (error) console.error(error.stack); // if error !== undefined
          })
        }
      });

    }
  }
