var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const BookRoom = require('../models/BookRoom.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
  BookRoom.find(async (err, bookRooms) => {
    if (err) {
      console.log('err::::');
      return next(err);
    } else {
      res.json(bookRooms);
    }
  });
});

module.exports = router;
