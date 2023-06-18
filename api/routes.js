const express = require('express');
const router = express.Router();

// Define a GET request handler
router.get('/api/users', (req, res) => {
  // Handle the GET request here
  res.json({ message: 'GET request received' });
});

module.exports = router;
