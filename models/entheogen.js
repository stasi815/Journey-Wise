const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EntheogenSchema = new Schema({
  name: { type: String },
  "plant source": { type: String},
  "psychoactive chemical": { type: String },
  dosage: { type: String },
  "healing applications": { type: String},
});

EntheogenSchema.pre('save', (next) => {
  // createdAt and updatedAt
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
    this.createdAt = now
  };
  next();
});

let Entheogen = mongoose.model('Entheogen', EntheogenSchema);

module.exports = Entheogen;