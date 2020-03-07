const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TribeSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  name: { type: String },
  region: { type: String},
  entheogen: { type: mongoose.Schema.Types.ObjectId, ref: "Entheogen" },
});

TribeSchema.pre('save', function(next) {
  // createdAt and updatedAt
  const now = new Date()
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now
  }

  next();
});

let Tribe = mongoose.model('Tribe', TribeSchema);

module.exports = Tribe;