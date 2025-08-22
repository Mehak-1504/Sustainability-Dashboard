const mongoose = require('mongoose');

const MetricSchema = new mongoose.Schema({
  type: { type: String, enum: ['Energy', 'Water', 'Waste', 'Emissions'], required: true },
  value: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: Date, default: Date.now },
  department: { type: String },
  unitName: { type: String },
  machine: { type: String },
  shift: { type: String },
});

module.exports = mongoose.model('Metric', MetricSchema);
