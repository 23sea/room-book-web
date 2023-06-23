var express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const BookRoom = require('../models/BookRoom.js');

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

router.get('/:id', (req, res, next) => {
  BookRoom.findById(req.params.id, (err, bookRooms) => {
    if (err) return next(err);
    res.json(bookRooms);
  });
});

router.post('/', (req, res, next) => {
  BookRoom.create(req.body, (err, bookRooms) => {
    if (err) return next(err);
    res.json(bookRooms);
  });
});

router.put('/:id', (req, res, next) => {
  BookRoom.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
