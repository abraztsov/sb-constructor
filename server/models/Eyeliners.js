const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EyelinersSchema = new mongoose.Schema({
  finish: String,
  formula: String,
  colorFamily: String,
  package: String,
  benefit: String
},
{ timestamps: true });

const Eyeliners = mongoose.model('Eyeliners', EyelinersSchema);

module.exports = Eyeliners;
