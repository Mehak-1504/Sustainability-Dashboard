const express = require('express');
const router = express.Router();
const Metric = require('../models/Metric');

// Get metrics (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { type, department, unitName, shift, startDate, endDate } = req.query;
    let query = {};
    if(type) query.type = type;
    if(department) query.department = department;
    if(unitName) query.unitName = unitName;
    if(shift) query.shift = shift;
    if(startDate && endDate) query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };

    const metrics = await Metric.find(query).sort({ date: 1 });
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add metric
router.post('/', async (req, res) => {
  try {
    const metric = new Metric(req.body);
    await metric.save();
    res.json(metric);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
