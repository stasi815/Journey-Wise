const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EntheogenSchema = new Schema({
  createdAt: { type: Date },
  updatedAt: { type: Date },
  name: { type: String },
  plantSource: { type: String},
  psychoactiveChemical: { type: String },
  dosage: { type: String },
  healingApplications: { type: String},
  tribes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tribe" }]
});

EntheogenSchema.pre('save', function(next) {
  // createdAt and updatedAt
  const now = new Date()
  this.updatedAt = now;

  if (!this.createdAt) {
    this.createdAt = now
  }

  next();
});

let Entheogen = mongoose.model('Entheogen', EntheogenSchema);

module.exports = Entheogen;