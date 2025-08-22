const mongoose = require('mongoose');
const Metric = require('./models/Metric');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const sampleData = [
  { type: 'Energy', value: 120, unit: 'kWh', department: 'Dyeing', unitName: 'Unit1', shift: 'A' },
  { type: 'Water', value: 5000, unit: 'Liters', department: 'Finishing', unitName: 'Unit2', shift: 'B' },
  { type: 'Waste', value: 50, unit: 'kg', department: 'Spinning', unitName: 'Unit1', shift: 'A' },
  { type: 'Emissions', value: 30, unit: 'CO2e', department: 'Weaving', unitName: 'Unit2', shift: 'B' },
];

Metric.insertMany(sampleData)
  .then(() => { console.log('Sample data inserted'); mongoose.disconnect(); })
  .catch(err => console.log(err));
