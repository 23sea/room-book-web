const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  User.find(async (err, users) => {
    try {
      const result = await Model.find({});
      res.json(users);
    } catch (err) {
      return next(err);
    }
  });
});

module.exports = router;
