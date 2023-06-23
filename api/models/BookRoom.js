var mongoose = require('mongoose');

const BookRoomSchema = new mongoose.Schema({
  book_time: Number,
  display_status: Boolean,
  name_book: String,
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BookRoom', BookRoomSchema);
